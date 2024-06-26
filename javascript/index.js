let title = document.querySelector('.gametitle');
let turn = 'x';
let square = [];

if(getCookie('xWins')){
    var xWins = getCookie('xWins');
}else{
    var xWins = 0;
}

if(getCookie('oWins')){
    var oWins = getCookie('oWins');
}else{
    var oWins = 0;
}

//for controling the burger menu settings
document.addEventListener("DOMContentLoaded", function () {
    const openIcon = document.getElementById("open");
    const closeIcon = document.getElementById("close");
    const linksDiv = document.getElementById("linksdiv");

    openIcon.addEventListener("click", function () {
        linksDiv.style.display = "block";
        openIcon.style.display = "none";
        closeIcon.style.display = "block";
    });

    closeIcon.addEventListener("click", function () {
        linksDiv.style.display = "none";
        openIcon.style.display = "block";
        closeIcon.style.display = "none";
    });

    // get winner from cookie and display in id spanx under the game it self.
    let cXwins = getCookie('xWins');
    if (cXwins) {
        document.getElementById('xWins').innerText = cXwins;
    }
    let cOwins = getCookie('oWins');
    if (cOwins) {
        document.getElementById('oWins').innerText = cOwins;
    }
});

//winner function and all the possibilities and also the Draw. 
function winner() {
    let isDraw = true;
    for (let i = 1; i < 10; i++) {
        square[i] = document.getElementById('item' + i).innerHTML;

        if (square[i] === '') {
            isDraw = false;
        }
    }

    if (isDraw) {
        title.innerHTML = 'DRAW';
        setInterval(function () {
            title.innerHTML += '.';
        }, 1000);
        setTimeout(function () {
            location.reload();
        }, 3000);
        return;
    } else if (square[1] == square[2] && square[2] == square[3] && square[3] != '') {

        if(turn !== 'x'){
            document.cookie = `xWins=${++xWins}`;
            title.innerHTML = `X winner`;
        }else {
            document.cookie = `oWins=${++oWins}`;
            title.innerHTML = `O winner`;
        }
        

        // changing the background color
        document.getElementById('item'+1).style.background = '#000';
        document.getElementById('item'+2).style.background = '#000';
        document.getElementById('item'+3).style.background = '#000';

        setInterval(function(){title.innerHTML+='.'},1000 )

        //reload the page
    
        setInterval(function(){location.reload()}, 4000)
    }


    else if (square[4] == square[5] && square[5] == square[6] && square[6] != ''){
        
        if(turn !== 'x'){
            document.cookie = `xWins=${++xWins}`;
            title.innerHTML = `X winner`;
        }else {
            document.cookie = `oWins=${++oWins}`;
            title.innerHTML = `O winner`;
        }

        document.getElementById('item'+4).style.background = '#000';
        document.getElementById('item'+5).style.background = '#000';
        document.getElementById('item'+6).style.background = '#000';

        setInterval(function(){title.innerHTML+='.'},1000 )
        setInterval(function(){location.reload()}, 4000)

    }
    else if (square[7] == square[8] && square[8] == square[9] && square[7] != '')
    {
        
        if(turn !== 'x'){
            document.cookie = `xWins=${++xWins}`;
            title.innerHTML = `X winner`;
        }else {
            document.cookie = `oWins=${++oWins}`;
            title.innerHTML = `O winner`;
        }

        document.getElementById('item'+7).style.background = '#000';
        document.getElementById('item'+8).style.background = '#000';
        document.getElementById('item'+9).style.background = '#000';

        setInterval(function(){title.innerHTML+='.'},1000 )
        setInterval(function(){location.reload()}, 4000)

    }
    else if (square[1] == square[4] && square[4] == square[7] && square[4] != '')
    {
        
        if(turn !== 'x'){
            document.cookie = `xWins=${++xWins}`;
            title.innerHTML = `X winner`;
        }else {
            document.cookie = `oWins=${++oWins}`;
            title.innerHTML = `O winner`;
        }

        document.getElementById('item'+1).style.background = '#000';
        document.getElementById('item'+4).style.background = '#000';
        document.getElementById('item'+7).style.background = '#000';

        setInterval(function(){title.innerHTML+='.'},1000 )
        setInterval(function(){location.reload()}, 4000)

    }
    else if (square[2] == square[5] && square[5] == square[8] && square[5] != '')
    {
        
        if(turn !== 'x'){
            document.cookie = `xWins=${++xWins}`;
            title.innerHTML = `X winner`;
        }else {
            document.cookie = `oWins=${++oWins}`;
            title.innerHTML = `O winner`;
        }
        document.getElementById('item'+2).style.background = '#000';
        document.getElementById('item'+5).style.background = '#000';
        document.getElementById('item'+8).style.background = '#000';

        setInterval(function(){title.innerHTML+='.'},1000 )
        setInterval(function(){location.reload()}, 4000)

    }
    else if (square[3] == square[6] && square[6] == square[9] && square[6] != '')
    {
        
        if(turn !== 'x'){
            document.cookie = `xWins=${++xWins}`;
            title.innerHTML = `X winner`;
        }else {
            document.cookie = `oWins=${++oWins}`;
            title.innerHTML = `O winner`;
        }
        document.getElementById('item'+3).style.background = '#000';
        document.getElementById('item'+6).style.background = '#000';
        document.getElementById('item'+9).style.background = '#000';

        setInterval(function(){title.innerHTML+='.'},1000 )
        setInterval(function(){location.reload()}, 4000)

    }
    else if (square[1] == square[5] && square[5] == square[9] && square[9] != '')
    {
        
        if(turn !== 'x'){
            document.cookie = `xWins=${++xWins}`;
            title.innerHTML = `X winner`;
        }else {
            document.cookie = `oWins=${++oWins}`;
            title.innerHTML = `O winner`;
        }
        document.getElementById('item'+1).style.background = '#000';
        document.getElementById('item'+5).style.background = '#000';
        document.getElementById('item'+9).style.background = '#000';

        setInterval(function(){title.innerHTML+='.'},1000 )
        setInterval(function(){location.reload()}, 4000)

    }
    else if (square[7] == square[5] && square[5] == square[3] && square[3] != '')
    {
        
        if(turn !== 'x'){
            document.cookie = `xWins=${++xWins}`;
            title.innerHTML = `X winner`;
        }else {
            document.cookie = `oWins=${++oWins}`;
            title.innerHTML = `O winner`;
        }
        document.getElementById('item'+7).style.background = '#000';
        document.getElementById('item'+5).style.background = '#000';
        document.getElementById('item'+3).style.background = '#000';

        setInterval(function(){title.innerHTML+='.'},1000 )
        setInterval(function(){location.reload()}, 2000)

    }
}

// turn rules.
function game (id)
{
    let Element = document.getElementById(id);
    if (turn === 'x' && Element.innerHTML == '')
    {
        Element.innerHTML = 'x'
        turn = 'o'
        title.innerHTML = 'o'
    }
    else if (turn === 'o' && Element.innerHTML == '')
    {
        Element.innerHTML = 'o'
        turn = 'x'
        title.innerHTML = 'x'
    }
    winner ();
}

//winner name cookie.

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}