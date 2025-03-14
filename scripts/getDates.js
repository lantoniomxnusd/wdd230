

const latModified= new Date(document.lastModified);

const formattedDate = lastModified.toLacaleString ('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric', 
    hour: '2-digit',
    minute: '2-digit', 
    second: '2-digit', 
});

document.getElementById("lastModified").textContent = "Last Modification:" + formattedDate;