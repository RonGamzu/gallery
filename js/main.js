console.log('Starting up');

var gProjs = [
    {
        "id": "touch-nums",
        "name": "touch-nums",
        "title": "touch as fast as you can",
        "desc": "lorem ipsum lorem ipsum lorem ipsum",
        "url": "projs/touch-nums",
        "publishedAt": 1448693940000,
        "labels": ["Matrixes", "keyboard events"],
    },

    {
        "id": "chess",
        "name": "chess",
        "title": "do you smart enough?",
        "desc": "lorem ipsum lorem ipsum lorem ipsum",
        "url": "projs/chess",
        "publishedAt": 1448693940000,
        "labels": ["Matrixes", "keyboard events"],
    },

    {
        "id": "memoryLogos-startHere",
        "name": "memoryLogos-startHere",
        "title": "do you smart enough?",
        "desc": "lorem ipsum lorem ipsum lorem ipsum",
        "url": "projs/chess",
        "publishedAt": 1448693940000,
        "labels": ["Matrixes", "keyboard events"],
    }
]

function renderProjs(projs) {
    var strHtmls = '<div class="row">';
    var strModals = '';
    projs.forEach(function (proj, idx) {
        strHtmls += `
                <div class="col-md-4 col-sm-6 portfolio-item">
                <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${idx + 1}">
                    <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                        <i class="fa fa-plus fa-3x"></i>
                    </div>
                    </div>
                    <img class="img-fluid" src="img/portfolio/port${idx + 1}.jpg" alt="">
                </a>
                <div class="portfolio-caption">
                    <h4>Threads</h4>
                    <p class="text-muted">Illustration</p>
                </div>
                </div>
        `
        strModals += `
        <div class="portfolio-modal modal fade" id="portfolioModal${idx + 1}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>Project Name</h2>
                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img class="img-fluid d-block mx-auto" src="img/portfolio/port${idx + 1}.jpg" alt="">
                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis
                  dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                  maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                <ul class="list-inline">
                  <li>Date: January 2017</li>
                  <li>Client: Threads</li>
                  <li>Category: Illustration</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        `

    });
    strHtmls += '</div>'
    var $elModal = $('body');
    var $elPorts = $('#portfolio .container');
    $elPorts.append(strHtmls);
    $elModal.append(strModals);
    
}

$(document).ready(function () {
    console.log('HEY HEY HEY')
    renderProjs(gProjs)
})