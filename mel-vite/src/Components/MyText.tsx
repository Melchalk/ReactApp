import Form from "react-bootstrap/Form";

export function MyText(state:string, fun:React.Dispatch<React.SetStateAction<string>>)
{
    console.log(state);

    return (
        <>
            <Form.Control
                size="lg"
                type="text"
                placeholder="Large text"
                onChange={(t) => fun(t.target.value)}/>
        </>
    );
}
