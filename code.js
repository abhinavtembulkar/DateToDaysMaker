const dayslist = document.getElementById('dayslist')
const monthslist = document.getElementById('monthslist')
const yearslist = document.getElementById('yearslist')

function optionadder(element,nums,start=1)
{
    for (let i = nums; i >= start; i--) 
    {
        const optionnode = document.createElement('option')
        optionnode.innerText = i        
        optionnode.value = i
        element.appendChild(optionnode)
    }
}

optionadder(dayslist,31)
optionadder(monthslist,12)
optionadder(yearslist,2100,1900)

const display = document.getElementById('displays')

function valuer(element)
{
    var vals = element.options[element.selectedIndex].value
    console.log(vals)
    return parseInt(vals)
}

function ceil(vals,denm)
{
    return (vals%denm==0)?~~(vals/denm):~~(vals/denm)+1
}

function calculate()
{
    days = valuer(dayslist)
    months = valuer(monthslist) - 1
    years = valuer(yearslist)
    console.log(days,months,years)
    
    var flag = 0
    if(years % 4 == 0)
    {
        if(years%100==0)
        {
            if(years%400==0)
            {
                flag = 1
            }
        }
        else
        {
            flag = 1
        }
    }

    var monthflag = 0
    if(months<=7)
        monthflag = ceil(months,2)
    else
        monthflag = ceil(months+1,2)

    if(months<2)
        flag = 0

    var ithdays = days + 30*months+monthflag+flag
    console.log(monthflag+flag, monthflag, flag)
    
    if(months>=2)
        ithdays-=2
    
    console.log(ithdays)
    display.innerHTML = `<h4>${ithdays.toString()}th day</h4>`
}
