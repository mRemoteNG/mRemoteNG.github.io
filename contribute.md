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
				</div>
				<div id="donate-button1"></div>
				<div class='form-group'>
					<input type='text' class='form-control' name='item_name' value='mRemoteNG € Contribution' readonly>
				</div>
				<div id="donate-button2"></div>
				<div class='form-group'>
					<input type='text' class='form-control' name='item_name' value='mRemoteNG £ Contribution' readonly>
				</div>
				<div id="donate-button3"></div>
				<div class='form-group'>
					<input type='text' class='form-control' name='item_name' value='mRemoteNG ₽ Contribution' readonly>
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
						hosted_button_id:'2N5HY54ZTT9TC ',
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
					}).render('#donate-button1');
				</script>
			</div>
		</div>
	</div>
	<div class='card'>
		<div class='card-body'>
			<h2 class='card-title'>Bitcoin</h2>
			<p class='card-text'>You may also make a contribution by sending <a href='https://www.bitcoin.org/'>Bitcoins</a> to <a href='bitcoin:16fUnHUM3k7W9Fvpc6dug7TAdfeGEcLbSg'><code style='word-break: break-word;'>16fUnHUM3k7W9Fvpc6dug7TAdfeGEcLbSg</code></a>.</p>
			<p class='card-text'><img class='img-responsive' alt='Bitcoin QR Code' src='{{ site.baseurl }}/16fUnHUM3k7W9Fvpc6dug7TAdfeGEcLbSg.png' srcset='{{ site.baseurl }}/16fUnHUM3k7W9Fvpc6dug7TAdfeGEcLbSg.svg' height='100px'>
			</p>
		</div>
	</div>
</div>

The mRemoteNG Project is **NOT** considered a non-profit organization and contributions are **NOT** tax deductible.

## Submit code
Check out our [source code]({{ site.github_alt.repository_url }}) and submit a pull request or two.

## Translate
Check out the [Wiki page]({{ site.github_alt.wiki_url }}/Translate) on how to help make mRemoteNG a polygot.

## Other
If you are a technical writer, translator or just feel like there is something you can contribute to mRemoteNG, please feel free to contact us.
