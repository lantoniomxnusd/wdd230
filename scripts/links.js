const baseURL = "https://lantoniomxnusd.github.io/wdd230/";
const linksURL = "https://lantoniomxnusd.github.io/wdd230/data/links.json";
const activities = document.querySelector('#activities');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data);
    displayLinks(data.weeks);
  }

  getLinks();

  const displayLinks = (weeks) => {
    weeks.forEach((week) => {
      let section = document.createElement('section');
      let heading = document.createElement('h3');
      heading.textContent = week.week;
  
      week.links.forEach((link) => {
        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', baseURL + link.url);
        linkElement.textContent = link.title;
        linkElement.setAttribute('target', '_blank');
  
        let listItem = document.createElement('p');
        listItem.appendChild(linkElement);
        section.appendChild(listItem);
      });
      
      section.prepend(heading);
      activities.appendChild(section);
    });
  };