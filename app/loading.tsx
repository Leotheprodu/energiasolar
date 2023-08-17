import React from 'react';
import { Spinner } from '@nextui-org/spinner';

export default function App() {
    return (
        <div className=" flex items-center justify-center h-[30rem]">
            <Spinner
                size="lg"
                color="success"
                label="Cargando"
                labelColor="success"
                className="my-0 mx-auto"
            />
        </div>
    );
}
