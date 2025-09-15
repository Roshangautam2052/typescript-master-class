type Preferences ={
    theme: "dark" | "light";
    language: "English" | "Spanish";

};

type AdditionalInfo = {
    [key: string]: any;
};


type Contact ={
    email: string ;
    phone?: string;
};


type User121 = {
    readonly id : number;
    name: string;
    age?: number;
    contact: Contact;
    preferences: Preferences;
    additionalInfo: AdditionalInfo;
    
};


let firstUser: User121 = {
    id: 1 ,
    name: "John Doe",
    age : 28,
    contact: {
        email: "john@example.com",
        phone: "12242424"
    },
    preferences:{
        theme: "dark",
        language: "English"
    },
    additionalInfo:{
        information : "This is example of index signature property"
    }

};

console.log(firstUser.additionalInfo)

