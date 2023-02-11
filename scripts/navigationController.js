
var lastClickedLink = null;

function navigationLinkClicked(link) {
    
    if (lastClickedLink) {
        lastClickedLink.classList.remove("clicked");
      }
      link.classList.add("clicked");
      lastClickedLink = link;
}