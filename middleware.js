let users = { 
    'Raagull': 'Raagull@123', 
    'Ragul': 'Ragul@123', 
    'Sandeep': 'Sandeep@123', 
    'Anjana': 'Anjana@123', 
    'Navina': 'Navina@123', 
    'Periyanayaki': 'Periyanayaki@123'
};

//Authentication Process
export function auth(name,password){
    return (users[String(name)]==String(password))?true:false;
}