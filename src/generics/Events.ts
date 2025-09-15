type Events = {
    id: number;
    date: Date;
    type: "indoor" | "outdoor";
};

type UnionOfKeysofEvents = keyof Events; //id /date /type


let idOfEvent: UnionOfKeysofEvents = "id";


type Person213523 = {
    name: string;
    age: string;
    address: string;
};

type PartialPerson ={
    [K in keyof Person]?:Person[K] | null;
};
