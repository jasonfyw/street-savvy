import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay
} from '@chakra-ui/react';
import React, { MutableRefObject } from 'react';
import List from './List';


interface ListDrawerProps {
    isOpen: boolean,
    onClose: () => void,
    btnRef: MutableRefObject<undefined>
}

const ListDrawer = (props: ListDrawerProps) => {
    return (
        <Drawer
            isOpen={props.isOpen}
            placement='right'
            onClose={props.onClose}
            finalFocusRef={props.btnRef && undefined}
            size={'lg'}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Your list</DrawerHeader>

                <DrawerBody>
                    <List />
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}

export default ListDrawer;