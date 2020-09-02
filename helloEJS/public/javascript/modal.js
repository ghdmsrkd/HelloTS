function modalOpen(id) {
    var tartget = id.getAttribute("data-target");
    document.getElementById(tartget).classList.add("is-active");
    document.getElementsByTagName("html").classList.add("is-clipped");
  };
   
  function modalClose(id) {
    var tartget = id.getAttribute("data-target");
    document.getElementById(tartget).classList.remove("is-active");
    document.getElementsByTagName("html").classList.remove("is-clipped");
  };