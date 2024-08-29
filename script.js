let dailyBtn = document.querySelector(".daily");
let weeklyBtn = document.querySelector(".weekly");
let monthlyBtn = document.querySelector(".monthly");


let formatedData = []

for(let i = 0; i < data.length; i++) {
    const item = data[i]

    let objTitle = item["title"]

    let objTimeframe = item["timeframes"]

    formatedData[objTitle] = objTimeframe
}


weeklyBtn.style.color = "white";
dailyBtn.addEventListener("click", (e)=>{
    dailyBtn.style.color = "white";
    weeklyBtn.style.color = "var(--Pale-Blue)";
    monthlyBtn.style.color = "var(--Pale-Blue)";

    document.querySelector(".work1 h2").textContent = formatedData["Work"]["daily"]["current"]+" hrs";
    document.querySelector(".work1 > .foreground > p").textContent = "Yesterday "+formatedData["Work"]["daily"]["previous"]+"-hrs";

    document.querySelector(".play h2").textContent = formatedData["Play"]["daily"]["current"]+" hrs";
    document.querySelector(".play > .foreground > p").textContent = "Yesterday "+formatedData["Play"]["daily"]["previous"]+"-hrs";

    document.querySelector(".study h2").textContent = formatedData["Study"]["daily"]["current"]+" hrs";
    document.querySelector(".study > .foreground > p").textContent = "Yesterday "+formatedData["Study"]["daily"]["previous"]+"-hrs";

    document.querySelector(".exercise h2").textContent = formatedData["Exercise"]["daily"]["current"]+" hrs";
    document.querySelector(".exercise > .foreground > p").textContent = "Yesterday "+formatedData["Exercise"]["daily"]["previous"]+"-hrs";

    document.querySelector(".social h2").textContent = formatedData["Social"]["daily"]["current"]+" hrs";
    document.querySelector(".social > .foreground > p").textContent = "Yesterday "+formatedData["Social"]["daily"]["previous"]+"-hrs";

    document.querySelector(".care h2").textContent = formatedData["Self Care"]["daily"]["current"]+" hrs";
    document.querySelector(".care > .foreground > p").textContent = "Yesterday "+formatedData["Self Care"]["daily"]["previous"]+"-hrs";
})
weeklyBtn.addEventListener("click", (e)=>{
    weeklyBtn.style.color = "white";
    dailyBtn.style.color = "var(--Pale-Blue)";
    monthlyBtn.style.color = "var(--Pale-Blue)";

    document.querySelector(".work1 h2").textContent = formatedData["Work"]["weekly"]["current"]+" hrs";
    document.querySelector(".work1 > .foreground > p").textContent = "Last Week "+formatedData["Work"]["weekly"]["previous"]+"-hrs";

    document.querySelector(".play h2").textContent = formatedData["Play"]["weekly"]["current"]+" hrs";
    document.querySelector(".play > .foreground > p").textContent = "Last Week "+formatedData["Play"]["weekly"]["previous"]+"-hrs";

    document.querySelector(".study h2").textContent = formatedData["Study"]["weekly"]["current"]+" hrs";
    document.querySelector(".study > .foreground > p").textContent = "Last Week "+formatedData["Study"]["weekly"]["previous"]+"-hrs";

    document.querySelector(".exercise h2").textContent = formatedData["Exercise"]["weekly"]["current"]+" hrs";
    document.querySelector(".exercise > .foreground > p").textContent = "Last Week "+formatedData["Exercise"]["weekly"]["previous"]+"-hrs";

    document.querySelector(".social h2").textContent = formatedData["Social"]["weekly"]["current"]+" hrs";
    document.querySelector(".social > .foreground > p").textContent = "Last Week "+formatedData["Social"]["weekly"]["previous"]+"-hrs";

    document.querySelector(".care h2").textContent = formatedData["Self Care"]["weekly"]["current"]+" hrs";
    document.querySelector(".care > .foreground > p").textContent = "Last Week "+formatedData["Self Care"]["weekly"]["previous"]+"-hrs";
})
monthlyBtn.addEventListener("click", (e)=>{
    monthlyBtn.style.color = "white";
    dailyBtn.style.color = "var(--Pale-Blue)";
    weeklyBtn.style.color = "var(--Pale-Blue)";

    document.querySelector(".work1 h2").textContent = formatedData["Work"]["monthly"]["current"]+" hrs";
    document.querySelector(".work1 > .foreground > p").textContent = "Last Month "+formatedData["Work"]["monthly"]["previous"]+"-hrs";

    document.querySelector(".play h2").textContent = formatedData["Play"]["monthly"]["current"]+" hrs";
    document.querySelector(".play > .foreground > p").textContent = "Last Month "+formatedData["Play"]["monthly"]["previous"]+"-hrs";

    document.querySelector(".study h2").textContent = formatedData["Study"]["monthly"]["current"]+" hrs";
    document.querySelector(".study > .foreground > p").textContent = "Last Month "+formatedData["Study"]["monthly"]["previous"]+"-hrs";

    document.querySelector(".exercise h2").textContent = formatedData["Exercise"]["monthly"]["current"]+" hrs";
    document.querySelector(".exercise > .foreground > p").textContent = "Last Month "+formatedData["Exercise"]["monthly"]["previous"]+"-hrs";

    document.querySelector(".social h2").textContent = formatedData["Social"]["monthly"]["current"]+" hrs";
    document.querySelector(".social > .foreground > p").textContent = "Last Month "+formatedData["Social"]["monthly"]["previous"]+"-hrs";

    document.querySelector(".care h2").textContent = formatedData["Self Care"]["monthly"]["current"]+" hrs";
    document.querySelector(".care > .foreground > p").textContent = "Last Month "+formatedData["Self Care"]["monthly"]["previous"]+"-hrs";
})