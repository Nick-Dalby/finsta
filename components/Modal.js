/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from '@headlessui/react'
import { CameraIcon } from '@heroicons/react/outline'
import { addDoc, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { Fragment, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { db, storage } from '../firebase'
import { ref, uploadString, getDownloadURL } from 'firebase/storage'


const Modal = () => {
  const { data: session, status } = useSession()

  const [open, setOpen] = useRecoilState(modalState)
  const filePickerRef = useRef(null)
  const captionRef = useRef(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [loading, setLoading] = useState(false)

  const addImageToPost = (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result)
    }
  }

  const uploadPost = async () => {
    if (loading) return
    setLoading(true)

    // 1) Create post and add to firestore 'posts collection
    // 2) get the post ID for the new post
    const docRef = await addDoc(collection(db, 'posts'), {
      username: session.user.username,
      caption: captionRef.current.value,
      profileImg: session.user.image,
      timestamp: serverTimestamp()
    })
    console.log('new doc added with ID: ', docRef.id);
    
    // 3) upload the image to firestore storage with the post ID
    const imageRef = ref(storage, `posts/${docRef.id}/image`)
    
    // 4) get a download url from fb storage and update the post with the image
    await uploadString(imageRef, selectedFile, 'data_url').then(async snapshot => {
      const downloadURL = await getDownloadURL(imageRef)
      await updateDoc(doc(db, 'posts', docRef.id), {
        image: downloadURL
      })
    })
    
    setOpen(false)
    setLoading(false)
    setSelectedFile(null)

  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex min-h-[800px] items-end justify-center pt-4 pb-20 text-center sm:block sm:min-h-screen sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-400 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* center modal content */}

          <span className="hidden sm:inline-block sm:h-screen sm:align-middle">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block transform overflow-hidden rounded-xl bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
              <div>
                {selectedFile ? (
                  <img
                    src={selectedFile}
                    alt=""
                    onClick={() => setSelectedFile(null)}
                    className='w-full object-contain cursor-pointer'
                  />
                ) : (
                  <div
                    onClick={() => filePickerRef.current.click()}
                    className="mx-auto flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-red-100 active:scale-95 hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all duration-200"
                  >
                    <CameraIcon
                      className="h-6 w-6 text-red-600"
                      aria-hidden="true"
                    />
                  </div>
                )}

                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Upload a photo
                    </Dialog.Title>

                    <div>
                      <input
                        ref={filePickerRef}
                        type="file"
                        hidden
                        onChange={addImageToPost}
                      />
                    </div>

                    <div className="mt-2">
                      <input
                        className="w-full border-none text-center focus:ring-0"
                        type="text"
                        ref={captionRef}
                        placeholder="Enter a caption..."
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    disabled={!selectedFile}
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-500 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-300 hover:bg-indigo-600 hover:disabled:bg-gray-300 sm:text-sm"
                    onClick={uploadPost}
                  >
                  {loading ? 'Uploading...' : 'Upload'}
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
export default Modal
