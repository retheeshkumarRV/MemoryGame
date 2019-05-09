
var maps=[
            ['','','',''],
            ['','','',''],
            ['','','',''],
            ['','','','']
         ];
  
var prevclick = ""; 

function initSystem()
{
   var tmp = ['sch.jpeg','drv.jpeg','sch.jpeg','khl.jpeg',
               'dhn.jpeg','gan.jpeg','yuv.jpeg','sev.jpeg',
               'sev.jpeg','yuv.jpeg','dhn.jpeg','khl.jpeg',
               'drv.jpeg','gan.jpeg','har.jpeg','har.jpeg'
             ];
              
    var r;
    
    for(var i=15; i>=0 ; i--)
    {
        r = Math.floor(Math.random() * i);
        maps[Math.floor(i/4)][i%4] = tmp[r];
        tmp[r] = tmp[i];
    }
}

function clicked(e)
{
    e = e || window.event;
    e = e.target || e.srcElement;
    
    var r = e.id.toString().substring(1,2).valueOf();
    var c = e.id.toString().substring(2,3).valueOf();
    
    if(maps[r][c] != "empty.jpg")
    {
        if(prevclick == "")
        {
            prevclick = e.id.toString();
            document.getElementById(e.id.toString()).src = maps[r][c];
        }
        else if(prevclick != e.id.toString())
        {
            var x = prevclick.substring(1,2).valueOf();
            var y = prevclick.substring(2,3).valueOf();

            if(maps[r][c] == maps[x][y])
            {
                document.getElementById(e.id.toString()).src=maps[r][c];
                maps[r][c] = "empty.jpg";
                maps[x][y] = "empty.jpg";
                setTimeout(hideImage.bind(null,e.id.toString(),"empty.jpg"), 300);    
                setTimeout(hideImage.bind(null,prevclick,"empty.jpg"),300);
                prevclick = "";
            }
            else
            {
                document.getElementById(e.id.toString()).src=maps[r][c];
                setTimeout(hideImage.bind(null,e.id.toString(),"default.jpg"), 300);
                setTimeout(hideImage.bind(null,prevclick,"default.jpg"),300);
                prevclick = "";
                document.getElementById("score").innerHTML = document.getElementById("score").innerHTML.valueOf() - 10;
            }
        }
        else
        {
            prevclick = "";
            setTimeout(hideImage.bind(null,e.id.toString(),"default.jpg"), 1);
            document.getElementById("score").innerHTML = document.getElementById("score").innerHTML.valueOf() - 5;
        }
    }    
}


function hideImage(id,img)
{
    document.getElementById(id).src=img;
}