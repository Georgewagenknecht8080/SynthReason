/* 
   Copyright (C) 2019 George Wagenknecht SynthReason, Artificial intelligence.
   This program is free software; you can redistribute it and/or modify it
   under the terms of the GNU General Public License as published by the Free
   Software Foundation; either version 2 of the License, or (at your option)
   any later version. This program is distributed in the hope that it will be
   useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General
   Public License for more details. You should have received a copy of the GNU
   General Public License along with this program; if not, write to the Free
   Software Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307 
   USA */
var output = "";
var outputprep = "";
var stage = 0;
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
bootloader = app.ReadFile("/sdcard/artificialintelligence.txt");
	var sentencea = bootloader.split(".");
	var aa = Math.floor(Math.random() * (sentencea.length)) + 0;
	var sentencestra = sentencea[aa];
	while (0 == 0)
	{
		var txt = bootloader;

		var sentence = txt.split(".");
		var fmax = 3;
		for (var x = 0; x < 20; x++)
		{
			var noun = app.ReadFile("/sdcard/noun.txt");
				var verb = app.ReadFile("/sdcard/verb.txt");
			var adv = app.ReadFile("/sdcard/adv.txt");
			var adj = app.ReadFile("/sdcard/adj.txt");
			var dic = app.ReadFile("/sdcard/words.txt");
			var counter = 0;
			while (counter < fmax)
			{
				var a = Math.floor(Math.random() * (sentence.length)) + 0;
				var sentencestr = sentence[a];
				var words = sentencestr.split(" ");
				var b = Math.floor(Math.random() * (words.length - 1)) + 0;
				if (words[b - 4] !== undefined && words[b - 3] !== undefined
					&& words[b - 2] !== undefined && words[b - 1] !== undefined
					&& words[b] !== undefined && words[b + 1] !== undefined
					&& words[b + 2] !== undefined && words[b + 3] !== undefined)
				{
					if (dic.indexOf(words[b - 4]) > -1 && dic.indexOf(words[b - 3]) > -1
						&& dic.indexOf(words[b - 2]) > -1 && dic.indexOf(words[b - 1]) > -1
						&& dic.indexOf(words[b]) > -1 && dic.indexOf(words[b + 1]) > -1
						&& dic.indexOf(words[b + 2]) > -1 && dic.indexOf(words[b + 3]) > -1
						&& noun.indexOf(words[b + 1]) > -1)
					{
						if (edtin.GetText().indexOf(words[b - 4] > -1)
							|| edtin.GetText().indexOf(words[b - 3] > -1)
							|| edtin.GetText().indexOf(words[b - 2] > -1)
							|| edtin.GetText().indexOf(words[b - 1] > -1)
							|| edtin.GetText().indexOf(words[b] > -1)
							|| edtin.GetText().indexOf(words[b + 1] > -1)
							|| edtin.GetText().indexOf(words[b + 2] > -1)
							|| edtin.GetText().indexOf(words[b + 3] > -1))
						{
							outputprep =
								words[b - 4] + " " + words[b - 3] + " " + words[b - 2] + " " +
								words[b - 1] + " " + words[b] + " " + words[b + 1] + " " +
								words[b + 2] + " " + words[b + 3] + " ";
						}

						var array1 = outputprep;
						var array = array1.split(" ");
						while (0 == 0)
						{
							var aa = Math.floor(Math.random() * (sentencea.length)) + 0;
							var sentencestra = sentencea[aa];
							var wordsa = sentencestra.split(" ");
							var bb = Math.floor(Math.random() * (wordsa.length - 1)) + 0;
							if (wordsa[bb - 3] !== undefined && wordsa[bb - 2] !== undefined
								&& wordsa[bb - 1] !== undefined & wordsa[bb] !== undefined
								&& wordsa[bb + 1] !== undefined && wordsa[bb + 2] !== undefined)
							{
								if ( wordsa[bb-3].length > 4 
								  && dic.indexOf(wordsa[bb - 3]) > -1
									&& dic.indexOf(wordsa[bb - 2]) > -1
									&& dic.indexOf(wordsa[bb - 1]) > -1
									&& dic.indexOf(wordsa[bb]) > -1
									&& dic.indexOf(wordsa[bb + 2]) > -1
									&& wordsa[bb].length > 4 && wordsa[bb + 1].length > 4)

								{
									outputprep2 =
										wordsa[bb - 3] + " " + wordsa[bb - 2] + " " + wordsa[bb -
																							 1] +
										" " + wordsa[bb] + " " + wordsa[bb + 1] + " "+ wordsa[bb + 2];
									break;
								}
							}
						}

	outputprepx = outputprep2.split(" ");
	var x  = Math.floor(Math.random() * (outputprepx.length)) + 0;
	var count = 0; 
	while (noun.indexOf(outputprepx[x] + "\n") == -1 || verb.indexOf(outputprepx[x] + "\n") == -1 && outputprep[x].length > 4){
	var x  = Math.floor(Math.random() * (outputprepx.length)) + 0;
	if(count == 100){
	break;
 }
	count++;
	}
	
	edtin.SetText(outputprepx[x] );
						if (output.indexOf(outputprep) == -1)
						{
							counter++;
							output += outputprep + outputprep2;
							edt.SetText(output);
						}
						output += ".\n\n\n";
						app.WriteFile("/sdcard/outputlog.txt", output);
						edt.SetText(output);
						var now = new Date().getTime();
						var newtime = new Date().getTime() + 2000;
						while (now < newtime)
						{
							now = new Date().getTime();
						}
					}
				}
			}
		}
	}
}