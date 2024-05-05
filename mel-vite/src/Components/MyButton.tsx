import { Button } from "react-bootstrap"
import { decrement, increment } from "../redux/counterSlice";
import { useAppDispatch } from "../redux/hooks";

export function MyBytton(){
    const dispatch = useAppDispatch();

    return(
        <>
            <Button variant="warning" onClick={() => dispatch(increment())}>+</Button>
            <Button variant="primary" onClick={() => dispatch(decrement())}>-</Button>
        </>
    )
}
