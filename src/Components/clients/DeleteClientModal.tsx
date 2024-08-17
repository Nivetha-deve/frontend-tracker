// import React from 'react'
// import {
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
//     useDisclosure,
//     Button,
//     Box,
//     Text,
//     Input,
//     Radio, RadioGroup, Stack, Flex,
//     Textarea,
//     Divider,
//     Checkbox
//   } from '@chakra-ui/react'
// import { FiMoreVertical } from 'react-icons/fi';
// type deleteClientProps={
//     handleDelete:Function;
//     name:string
//   }


// const DeleteClientModal = ({handleDelete, name}:deleteClientProps) => {
//     const { isOpen, onOpen, onClose } = useDisclosure();

//     const onClick = () => {
//       onClose();
//         handleDelete();
//     }
//   return (
//     <>
//         <Button onClick={onOpen}><FiMoreVertical /></Button>
  
//         <Modal isOpen={isOpen} onClose={onClose}>
//           <ModalOverlay />
//           <ModalContent>
//             <ModalHeader>Archive</ModalHeader>
//             <Divider />
//             <ModalCloseButton />
//             <ModalBody>
//                 <Text marginBottom={"20px"}>Are you sure you want to archive {name}?</Text>
//                 <Box>
//                 <Checkbox>Also archive all projects assigned to this client</Checkbox>
//                 </Box>
//             </ModalBody>
//             <Divider />
//             <ModalFooter>
//               <Button variant='ghost' mr={3} onClick={onClose}>
//                 Cancel
//               </Button>
//               <Button onClick={onClick} background={"#f44336"} color="white">Archive</Button>
//             </ModalFooter>
//           </ModalContent>
//         </Modal>
//       </>
//   )
// }

// export default DeleteClientModal


import React, { useState } from 'react'
import { FiMoreVertical } from 'react-icons/fi';

type DeleteClientProps = {
    handleDelete: Function;
    name: string;
}

const DeleteClientModal = ({ handleDelete, name }: DeleteClientProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [archiveProjects, setArchiveProjects] = useState(false);

    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    const onClick = () => {
        onClose();
        handleDelete();
    }

    return (
        <>
            <button onClick={onOpen} className="p-2 rounded-full hover:bg-gray-200">
                <FiMoreVertical />
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 overflow-auto bg-gray-600 bg-opacity-50 flex">
                    <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
                        <div className="flex justify-between items-center pb-3">
                            <p className="text-2xl font-bold">Archive</p>
                            <div className="cursor-pointer z-50" onClick={onClose}>
                                <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="my-5">
                            <p className="mb-5">Are you sure you want to archive {name}?</p>
                            <div className="flex items-center">
                                <input 
                                    type="checkbox" 
                                    id="archiveProjects" 
                                    checked={archiveProjects}
                                    onChange={() => setArchiveProjects(!archiveProjects)}
                                    className="mr-2"
                                />
                                <label htmlFor="archiveProjects">
                                    Also archive all projects assigned to this client
                                </label>
                            </div>
                        </div>
                        <div className="flex justify-end pt-2">
                            <button 
                                onClick={onClose}
                                className="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={onClick}
                                className="modal-close px-4 bg-red-500 p-3 rounded-lg text-white hover:bg-red-400"
                            >
                                Archive
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default DeleteClientModal