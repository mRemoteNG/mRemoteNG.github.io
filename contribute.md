---
title: Contribute
permalink: /contribute
---
<style>
 #submitBtn {
  transition: opacity 0.35s ease;
 }
</style>
<script>
 $(document).ready(function() {
  var cleave = new Cleave('#amount', {
   numeral: true
  });
  $('#amount').keyup(function(evt) {
   $('#submitBtn').prop('disabled', ($(this).val() ? false : true));
  });
 });
</script>

## Donate

If you find mRemoteNG useful and would like to contribute, it would be greatly appreciated.  When you contribute, you make it possible for the team to cover the costs of producing mRemoteNG.
<div class='card-deck text-center'>
 <div class='card'>
  <div class='card-body'>
   <h2 class='card-title'>PayPal</h2>
   <div id="donate-button-container">
    <div class='form-group'>
     <input type='text' class='form-control' name='item_name' value='mRemoteNG $ Contribution' readonly>
     <p class='card-text'><img class='img-responsive' alt='PayPal QR Code' src='{{ site.baseurl }}/images/donations/PayPal QR Code (1).png' height='100px'></p>
    </div>
    <div id="donate-button1"></div>
    <div class='form-group'>
     <input type='text' class='form-control' name='item_name' value='mRemoteNG € Contribution' readonly>
     <p class='card-text'><img class='img-responsive' alt='PayPal QR Code' src='{{ site.baseurl }}/images/donations/PayPal QR Code (2).png' height='100px'></p>
    </div>
    <div id="donate-button2"></div>
    <div class='form-group'>
     <input type='text' class='form-control' name='item_name' value='mRemoteNG £ Contribution' readonly>
     <p class='card-text'><img class='img-responsive' alt='PayPal QR Code' src='{{ site.baseurl }}/images/donations/PayPal QR Code (3).png' height='100px'></p>
    </div>
    <div id="donate-button3"></div>
    <script src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js" charset="UTF-8"></script>
    <script>
     PayPal.Donation.Button({
      env:'production',
      hosted_button_id:'CHQY3Q3ST9H4U',
      image: {
       src:'https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif',
       alt:'Donate with PayPal button',
       title:'PayPal - The safer, easier way to pay online!',
      }
     }).render('#donate-button1');
    </script>
    <script>
     PayPal.Donation.Button({
      env:'production',
      hosted_button_id:'UK75QBUYNPYKN',
      image: {
       src:'https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif',
       alt:'Donate with PayPal button',
       title:'PayPal - The safer, easier way to pay online!',
      }
     }).render('#donate-button2');
    </script>
    <script>
     PayPal.Donation.Button({
      env:'production',
      hosted_button_id:'2N5HY54ZTT9TC',
      image: {
       src:'https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif',
       alt:'Donate with PayPal button',
       title:'PayPal - The safer, easier way to pay online!',
      }
     }).render('#donate-button3');
    </script>
   </div>
  </div>
 </div>

  <div class="card">
    <div class="card-body">
      <h2 class="card-title">BIG thanks!</h2>
      <!-- Pagination Buttons -->
      <div class="pagination">
        <button onclick="filterRecords('2025')">2025</button>
        <button onclick="filterRecords('2024')">2024</button>
        <button onclick="filterRecords('earlier')">Earlier</button>
      </div>
      <!-- List Container -->
      <ul id="records-list" style="list-style-type: none">
        <li data-year="2025">Christopher Puschmann</li>
        <li data-year="2025">Stefano Biloslavo</li>
        <li data-year="2024">Michael Logies</li>
        <li data-year="2024">Koffi TOGLO</li>
        <li data-year="2024">Helge Weber</li>
        <li data-year="2024">Volnet Odza</li>
        <li data-year="2024"><b>Alexander Raithel</b></li>
        <li data-year="2024">Raffaello Bruno Freire</li>
        <li data-year="2024"><b>Denis Iakunin</b></li>
        <li data-year="2024">Janne Saarinen</li>
        <li data-year="2024">Pedro Lopes</li>
        <li data-year="2024">James Higgs - Computer Services</li>
        <li data-year="2024"><b>Stephen Friedl</b></li>
        <li data-year="2024">Christopher Radi</li>
        <li data-year="2024"><b><u>MC-Software</u></b></li>
        <li data-year="2024"><b>Ivan Vaselli</b></li>
        <li data-year="2024"><b>Robert Harrington</b></li>
        <li data-year="2024">Alberto Jarquin Hernandez</li>
        <li data-year="2024">Paweł Iżykowski</li>
        <li data-year="2024">Alan Graham</li>
        <li data-year="2024">Michael J Kehrli</li>
        <li data-year="2024">Joseph Orlik</li>
        <li data-year="2024">Nicolai Serup</li>
        <li data-year="2024">Martin Dropmann</li>
        <li data-year="earlier"><b><u>Jason Davis</u></b></li>
        <li data-year="earlier">Schwarz Fabrice</li>
        <li data-year="earlier">James Hart</li>
        <li data-year="earlier">Meetstream USA</li>
        <li data-year="earlier"><b>Ivan Vaselli</b></li>
        <li data-year="earlier"><b>Cory Theurer</b></li>
        <li data-year="earlier">Brenton Homer</li>
        <li data-year="earlier">Michael Gricksch</li>
        <li data-year="earlier"><i>Denis Iakunin</i></li>
        <li data-year="earlier">Vito Mattera</li>
        <li data-year="earlier">Sören Calvert</li>
        <li data-year="earlier"><i>Shaun Cronin</i></li>
        <li data-year="earlier"><b>Matteo Menozzi</b></li>
        <li data-year="earlier"><i>Russell Thompson</i></li>
        <li data-year="earlier"><b>Marlon Diering</b></li>
        <li data-year="earlier">Gerald Osterkon</li>
        <li data-year="earlier">Daniel Anthes</li>
        <li data-year="earlier">Daniel Rusek</li>
        <li data-year="earlier">Paweł Iżykowski</li>
        <li data-year="earlier">Joel Grimes</li>
        <li data-year="earlier">Jürgen Busch</li>
        <li data-year="earlier">Łukasz Milata</li>
        <li data-year="earlier">Charles Fletcher</li>
        <li data-year="earlier">Frank Mandrell</li>
        <li data-year="earlier">Michal Krupa</li>
        <li data-year="earlier">Tianpeng Wang</li>
        <li data-year="earlier">Dylan Giovanni Gambino</li>
        <li data-year="earlier">Michael Gaul</li>
        <li data-year="earlier">Andrew Warham</li>
        <li data-year="earlier">Sergei Shir</li>
        <li data-year="earlier">Magnus Fagertun</li>
        <li data-year="earlier">Loeper Matthias</li>
        <li data-year="earlier">Dosinas.net WEb creations</li>
        <li data-year="earlier">Cristina Guevarra</li>
        <li data-year="earlier">Ziga Jenko</li>
        <li data-year="earlier"><b><u>Sylvain Pepoli</u></b></li>
        <li data-year="earlier">Bart De Boeck</li>
        <li data-year="earlier">Charles Veillon</li>
        <li data-year="earlier">Christopher Letcher</li>
        <li data-year="earlier">Pietro Luca Savorosi</li>
        <li data-year="earlier">Marc Gutt</li>
        <li data-year="earlier">Richard Abogado</li>
        <li data-year="earlier">Marcelo Ferreira da Costa</li>
        <li data-year="earlier">David Teske</li>
        <li data-year="earlier">Kilian Rauner</li>
        <li data-year="earlier">Eckard Wille</li>
        <li data-year="earlier">Marlon Diering</li>
        <li data-year="earlier">Elliott Marvin</li>
        <li data-year="earlier">Benjamin Truninger</li>
        <li data-year="earlier">James Hart</li>
        <li data-year="earlier">Kai Ulrich</li>
        <li data-year="earlier">Sean Nelson</li>
        <li data-year="earlier">Guy Lincoln</li>
        <li data-year="earlier">Stephen Friedl</li>
        <li data-year="earlier">Jeremy Holder</li>
        <li data-year="earlier">Daniel Khumalo</li>
        <li data-year="earlier">Danatas Gervi</li>
        <li data-year="earlier">John Harrison</li>
        <li data-year="earlier">Neilhighley.com ltd.</li>
        <li data-year="earlier">Rafał Kurc</li>
        <li data-year="earlier">Sebastian Ulrich</li>
        <li data-year="earlier">Profi-KOM ltd.</li>
      </ul>
    </div>
    <script>
      function filterRecords(year) {
        const listItems = document.querySelectorAll("#records-list li");
        listItems.forEach(item => {
          if (item.getAttribute("data-year") === year || item.textContent.includes(year)) {
            item.style.display = "block"; // Show matching items
          } else {
            item.style.display = "none"; // Hide non-matching items
          }
        });
      }
      // Default view: Show all records
      window.onload = () => filterRecords("2025"); // Or set to "all" to show everything initially
    </script>
  </div>
</div>
The mRemoteNG Project is **NOT** considered a non-profit organization and contributions are **NOT** tax deductible.

## Submit code

Check out our [source code]({{ site.github_alt.repository_url }}) and submit a pull request or two.

## Translate

Check out the [Wiki page]({{ site.github_alt.wiki_url }}/Translate) on how to help make mRemoteNG a polyglot.

## Other

If you are a technical writer, translator or just feel like there is something you can contribute to mRemoteNG, please feel free to contact us.
