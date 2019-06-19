var output = "";
function OnStart()
{
	lay = app.CreateLayout("linear", "VCenter,FillXY");
	edtin = app.CreateTextEdit("", 0.96, 0.05);
	edtin.SetTextSize(5);
	lay.AddChild(edtin);
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
	bootloader += app.ReadFile("/sdcard/artificialintelligence.txt");
	bootloader += app.ReadFile("/sdcard/cybernetics.txt");
	var sentencea = bootloader.split(".");
	var aa = Math.floor(Math.random() * (sentencea.length)) + 0;
	var sentencestra = sentencea[aa];
	while (0 == 0)
	{
		var dic = app.ReadFile("/sdcard/words.txt");
		var words = sentencestra.split(" ");
		var x = Math.floor(Math.random() * (words.length)) + 0;
		var words2 = sentencestra.split(" ");
		var y = Math.floor(Math.random() * (words2.length)) + 0;
		if (dic.indexOf(words[x] + "\n") > -1 && dic.indexOf(words2[y + 1] + "\n") > -1)
		{
			while (words[x] != words2[y])
			{
				var aa = Math.floor(Math.random() * (sentencea.length)) + 0;
				var sentencestra = sentencea[aa];
				var words2 = sentencestra.split(" ");
				var y = Math.floor(Math.random() * (words2.length)) + 0;
			}
			if (words[x] !== undefined && words2[y + 1] !== undefined)
			{
				var doublecheck = output.split(" ");
				if (output.indexOf(words[x]) == -1 && output.indexOf(words2[y + 1]) == -1)
				{
					output += words[x] + " " + words2[y + 1] + " ";
					app.ShowPopup(output);
				}
			}
		}
	}
}
