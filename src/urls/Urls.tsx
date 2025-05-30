type DevEnv={
    Env:string;
    prefixurl:string;
}

type Url={
    url:string | undefined;
}


const env:DevEnv[]=[
    {Env:"dev",prefixurl:"http://localhost:3000"},
    {Env:"prod",prefixurl:"https://zoblabs.apis"}
]

export const urlObject:Url={
            "url":env.find((e)=>e.Env=="dev")?.prefixurl
}