
//* this script will send message to all your chats in WhatsApp   */
// (to simulate user interaction ) 
// the delay is set to 3 seconds between writing and sending navigation 
// the purpose of delay , is to avoid getting banned from WhatsApp hopefully 

const navDelay=1000
const message ="your message "  // Replace the Message with your message use 
function simulateMouseEvents(element, eventName)
{
	var mouseEvent = document.createEvent('MouseEvents');
	mouseEvent?.initEvent(eventName, true, true);
	element?.dispatchEvent(mouseEvent);
}

//get all the chats in the page 
const chats = document.getElementsByClassName('_3OvU8');
const delay = ms => new Promise(res => setTimeout(res, ms));


// write the message in the text box
async function insertText(name,text){
    simulateMouseEvents(document.querySelector('[title="' + name + '"]'), 'mousedown');
    await delay(navDelay);
    console.log(`putting message to text box for name : ${name}`)
    messageBox = document.querySelectorAll("[contenteditable='true']")[1];
    message = text;
    const event = document.createEvent("UIEvents");
    messageBox.innerHTML = message.replace(/ /gm, ''); // test it
    event.initUIEvent("input", true, true);
    messageBox.dispatchEvent(event);
}
  

 async function send(name){
    simulateMouseEvents(document.querySelector('[title="' + name + '"]'), 'mousedown'); 
    await delay(navDelay);
    console.log(`sending the message  for  : ${name}`)
    messageBox = document.querySelectorAll("[contenteditable='true']")[1];
    if(messageBox.innerHTML!='')
    simulateMouseEvents(document.querySelector('span[data-icon="send"]'), 'click');
}

 async function startSending() {  
     var name ;
        for(i=1;i<4;i++){
            console.log('chat number : ',i)
            name= chats[i]?.children[0]?.children[0].children[0].children[0].title
            await delay(navDelay)
            insertText(name,'message')
            await delay(navDelay)
            send(name)
        }
    
}
 


