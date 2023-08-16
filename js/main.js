async function newsHeadlines() {
    const response = await  fetch("http://localhost:8080/manage-account/get-news-list?id=2");
    // const response = await  fetch("http://localhost:8080/manage-account/get-news-list?id=2",{
    //     method:"POST",
    //     body:""
    // });
    const Temp = await response.json();
    console.log(Temp.map(item=>item.title));
    return Temp.map(item=>item.title);
  }
  async function noticesHeadlines() {
    const response = await  fetch("http://localhost:8080/manage-account/get-news-list?id=1");
    const Temp = await response.json();
    console.log(Temp.map(item=>item.title));
    return Temp.map(item=>item.title);
  }

  console.log(document.getElementById("news").innerText)
  newsHeadlines().then(v => {
      v.map(item => {
          document.getElementById("news").innerHTML  = document.getElementById("news").innerHTML + '<li>'+item+'</li>'
      })
      
  })
  noticesHeadlines().then(v => {
      v.map(item => {
          document.getElementById("notices").innerHTML  = document.getElementById("notices").innerHTML + '<li>'+item+'</li>'
      })
      
  })
   