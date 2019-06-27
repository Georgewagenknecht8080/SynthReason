var output = "";
function OnStart()
{
	lay = app.CreateLayout("linear", "VCenter,FillXY");
	edt = app.CreateTextEdit("", 0.96, 0.8);
	edt.SetTextSize(5);
	lay.AddChild(edt);
	btnLoad = app.CreateButton("Init", 0.23, 0.1);
	btnLoad.SetOnTouch(btn_OnTouch);
	lay.AddChild(btnLoad);
	app.AddLayout(lay);
}
function btn_OnTouch()
{
	var bootloader = app.ReadFile("/sdcard/philosophy.txt");
	var sentencea = bootloader.split(".");
	var aa = Math.floor(Math.random() * (sentencea.length)) + 0;
	var sentencestra = sentencea[aa];
	for (var count = 0; count < 250;count++ )
	{
		var aa = Math.floor(Math.random() * (sentencea.length)) + 0;
	var sentencestra = sentencea[aa];
		var dic = app.ReadFile("/sdcard/words.txt");
		var words = sentencestra.split(" ");
		var x = Math.floor(Math.random() * (words.length)) + 0;
		var words2 = sentencestra.split(" ");
		var y = Math.floor(Math.random() * (words2.length)) + 0;
		if (dic.indexOf(words[x] + "\n") > -1 && dic.indexOf(words2[y + 1] + "\n") > -1)
		{
		var count2 = 0;
			for (var count2  = 0; words[x] != words2[y] && count2 != 100;count2++)
			{
				var aa = Math.floor(Math.random() * (sentencea.length)) + 0;
				var sentencestra = sentencea[aa];
				var words2 = sentencestra.split(" ");
				var y = Math.floor(Math.random() * (words2.length)) + 0;
			}
			if (words[x] !== undefined && words2[y + 1] !== undefined && words[x + 2] !== undefined && words2[y + 3] !== undefined && words[x + 4] !== undefined && words2[y + 5] !== undefined)
			{
				if (output.indexOf(words[x]) == -1 && output.indexOf(words2[y + 1]) == -1)
				{
					output += words[x] + " " + words2[y + 1] + " " + words[x + 2] + " " + words2[y+3] + " " + words[x + 4] + " " + words[y + 5] + " ";
					edt.SetText( output );
			app.SetClipboardText(output );
				}
			}
		}
	}
	app.ShowPopup( "Done" );
}