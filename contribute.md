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
				<div class='form-group'>
					<input type='text' class='form-control' name='item_name' value='mRemoteNG ₽ Contribution' readonly>
					<p class='card-text'><img class='img-responsive' alt='PayPal QR Code' src='{{ site.baseurl }}/images/donations/PayPal QR Code (4).png' height='100px'></p>
				</div>
				<div id="donate-button4"></div>
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
				<script>
					PayPal.Donation.Button({
						env:'production',
						hosted_button_id:'CBQ54US7EFX68',
						image: {
							src:'https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif',
							alt:'Donate with PayPal button',
							title:'PayPal - The safer, easier way to pay online!',
						}
					}).render('#donate-button4');
				</script>
			</div>
		</div>
	</div>
	<div class='card'>
		<div class='card-body'>
			<h2 class='card-title'><img class='img-responsive' alt='btc' src='{{ site.baseurl }}/images/donations/btc.png'>Bitcoin</h2>
			<p class='card-text'>You may also make a contribution by sending <a href='https://bitcoin.org/'>Bitcoins</a> to <a href='bitcoin:3GzzNcMnkMpRREhvP6SxgWWzq58Q7zHk7p'><code style='word-break: break-word;'>3GzzNcMnkMpRREhvP6SxgWWzq58Q7zHk7p</code></a>.</p>
			<p class='card-text'><img class='img-responsive' alt='Bitcoin QR Code' src='{{ site.baseurl }}/images/donations/BTC QR Code.jpg' height='100px'></p>
			<h2 class='card-title'><img class='img-responsive' alt='eth' src='{{ site.baseurl }}/images/donations/eth.png'>Ethereum</h2>
			<p class='card-text'>You may also make a contribution by sending <a href='https://ethereum.org//'>Ethereum</a> to <a href='ethereum:0xdf4151f161ff33d6bfd846ce29032fb325969f9b'><code style='word-break: break-word;'>0xdf4151f161ff33d6bfd846ce29032fb325969f9b</code></a>.</p>
			<p class='card-text'><img class='img-responsive' alt='Ethereum QR Code' src='{{ site.baseurl }}/images/donations/ETH QR Code.jpg' height='100px'></p>
			<h2 class='card-title'><img class='img-responsive' alt='usdt' src='{{ site.baseurl }}/images/donations/tether-usdt.png'>Tether</h2>
			<p class='card-text'>You may also make a contribution by sending <a href='https://tether.to//'>Tether</a> to <a href='tether:TSBpMwkon1XUm6gLHpPWQ9NpELpnpx9bNn'><code style='word-break: break-word;'>TSBpMwkon1XUm6gLHpPWQ9NpELpnpx9bNn</code></a>.</p>
			<p class='card-text'><img class='img-responsive' alt='USDT QR Code' src='{{ site.baseurl }}/images/donations/USDT QR Code.jpg' height='100px'></p>
		</div>
	</div>
	<div class='card'>
		<div class='card-body'>
			<h2 class='card-title'>BIG thanks!</h2>
			<ul style="list-style-type: none">
				<li><b><u>Jason Davis</u></b></li>
				<li>Schwarz Fabrice</li>
				<li>James Hart</li>
				<li>Meetstream USA</li>
				<li><b>Ivan Vaselli</b></li>
				<li><b>Cory Theurer<b></li>
				<li>Brenton Homer</li>
				<li>Michael Gricksch</li>
				<li><i>Denis Iakunin</i></li>
				<li>Vito Mattera</li>
				<li>Sören Calvert</li>
				<li><i>Shaun Cronin</i></li>
				<li><b>Matteo Menozzi</b></li>
				<li><i>Russell Thompson</i></li>
				<li><b>Marlon Diering</b></li>
				<li>Gerald Osterkon</li>
				<li>Daniel Anthes</li>
				<li>Daniel Rusek</li>
				<li>Paweł Iżykowski</li>
				<li>Joel Grimes</li>
				<li>Jürgen Busch</li>
				<li>Łukasz Milata</li>
				<li>Charles Fletcher</li>
				<li>Frank Mandrell</li>
				<li>Michal Krupa</li>
				<li>Tianpeng Wang</li>
				<li>Dylan Giovanni Gambino</li>
				<li>Michael Gaul</li>
				<li>Andrew Warham</li>
				<li>Sergei Shir</li>
				<li>Magnus Fagertun</li>
				<li>Loeper Matthias</li>
				<li>Dosinas.net WEb creations</li>
				<li>Cristina Guevarra</li>
				<li>Ziga Jenko</li>
				<li><b><u>Sylvain Pepoli</u></b></li>
				<li>Bart De Boeck</li>
				<li>Charles Veillon</li>
				<li>Christopher Letcher</li>
				<li>Pietro Luca Savorosi</li>
				<li>Marc Gutt</li>
				<li>Richard Abogado</li>
				<li>Marcelo Ferreira da Costa</li>
				<li>David Teske</li>
				<li>Kilian Rauner</li>
				<li>Eckard Wille</li>
				<li>Marlon Diering</li>
				<li>Elliott Marvin</li>
				<li>Benjamin Truninger</li>
				<li>James Hart</li>
				<li>Kai Ulrich</li>
				<li>Sean Nelson</li>
				<li>Guy Lincoln</li>
				<li>Stephen Friedl</li>
				<li>Jeremy Holder</li>
				<li>Daniel Khumalo</li>
				<li>Danatas Gervi</li>
				<li>John Harrison</li>
				<li>Neilhighley.com ltd.</li>
				<li>Rafał Kurc</li>
				<li>Sebastian Ulrich</li>
				<li>Profi-KOM ltd.</li>
			</ul>
		</div>
	</div>
</div>

The mRemoteNG Project is **NOT** considered a non-profit organization and contributions are **NOT** tax deductible.

## Submit code
Check out our [source code]({{ site.github_alt.repository_url }}) and submit a pull request or two.

## Translate
Check out the [Wiki page]({{ site.github_alt.wiki_url }}/Translate) on how to help make mRemoteNG a polyglot.

## Other
If you are a technical writer, translator or just feel like there is something you can contribute to mRemoteNG, please feel free to contact us.
