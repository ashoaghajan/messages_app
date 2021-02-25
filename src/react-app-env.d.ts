// types for messages
type Message = {
    id: number,
    sender: string,
    date: string,
    body: string
}

type MessageState = {
    data: Message[]
}

type MessageActions = {
    type: "GET_MESSAGES",
    data: Message[]
}


// types for colors
type Color = {
    id: number,
    color: string
}

type ColorState = {
    data: Color[],
    selected: string
}

type ColorActions = {
    type: "GET_COLORS",
    data: Color[] 
} | {
    type: "SET_SELECTED",
    data: string
}


// global types
type RootState = {
    messages: MessageState,
    colors: ColorState
}

type Actions = MessageActions | ColorActions;

type Dispatch = (actions: Actions) => void;


