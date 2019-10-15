import $ from 'jQuery';

// rest api called 
function AboutService() {
    const resultResp = $.ajax("https://jsonplaceholder.typicode.com/posts?userId=1");
    console.log(resultResp);
    return {
        "name": "tonyspark",
        "phone": "010-1234-1234"
    }
}

function AboutRender(html) {
    return html;
}

function AboutController() {
    const jsonHtml = AboutService();
    return AboutRender(`
        <h1>${jsonHtml.name}</h1>
        <p>${jsonHtml.phone}</p>
    `);
}

// render 
export default AboutController();