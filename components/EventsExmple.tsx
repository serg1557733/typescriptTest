import { ChangeEvent, FC, MouseEvent, useState, DragEvent, useRef } from "react";

const EventsExample: FC = () => {

    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);

    const inputtRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(inputtRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('drag')
    }

    const dragleaveHandler = () => {

    }
    const leaveHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }
    const dropHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);

    }
    const overWithPreventHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true)

    }


    return (
        <div>
            <input type="text" placeholder="control" />
            <input type="text" placeholder="notcontrol" ref={inputtRef} />
            <button onClick={clickHandler} > Example </button>
            <div onDrag={dragHandler} style={{ width: 200, height: 200, backgroundColor: 'gray' }} draggable={true}></div>
            <div
                onDrop={dropHandler}
                onDragOver={overWithPreventHandler}
                onDragLeave={leaveHandler}
                style={{ width: 200, height: 200, backgroundColor: isDrag ? 'red' : 'black', marginTop: 21 }}>

            </div>
        </div>
    )
}

export default EventsExample;