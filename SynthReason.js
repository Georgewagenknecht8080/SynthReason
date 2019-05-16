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
	edt = app.CreateTextEdit("", 0.96, 0.9);
	edt.SetTextSize(5);
	lay.AddChild(edt);
	btnLoad = app.CreateButton("Init", 0.23, 0.1);
	btnLoad.SetOnTouch(btn_OnTouch);
	lay.AddChild(btnLoad);
	app.AddLayout(lay);
}

function btn_OnTouch()
{
	while (0 == 0)
	{
		var txt = app.ReadFile("/sdcard/security.txt");
		var sentence = txt.split(".");
		var fmax = 6;
		for (var x = 0; x < 10; x++)
		{
			var noun = app.ReadFile("/sdcard/noun.txt");
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
					&& words[b + 2] !== undefined && words[b + 2].length > 5)
				{
					if (dic.indexOf(words[b - 4]) > -1 && dic.indexOf(words[b - 3]) > -1
						&& dic.indexOf(words[b - 2]) > -1 && dic.indexOf(words[b - 1]) > -1
						&& dic.indexOf(words[b]) > -1 && dic.indexOf(words[b + 1]) > -1
						&& dic.indexOf(words[b + 2]) > -1 && noun.indexOf(words[b]) > -1)
					{
						outputprep =
							words[b - 4] + " " + words[b - 3] + " " + words[b - 2] + " " +
							words[b - 1] + " " + words[b] + " " + words[b + 1] + " " + words[b +
																							 2] +
							" ";
							
							
							
				var array1 = outputprep;
					var array = array1.split(" ");
						for (var traverse = 0; traverse < array.length; traverse++)
						{
							if (outputprep.indexOf(array[traverse]) > -1)
							{
								txt = app.ReadFile("/sdcard/ethics.txt");
								sentence = txt.split(".");
								if (outputprep.indexOf(array[traverse]) > -1)
								{
										break;
									
								}
							}
						}
						if (output.indexOf(outputprep) == -1)
						{
							output += outputprep;
							edt.SetText(output);
							counter++;
						}
					}
				}
			}
			output += ".\n\n";
			app.WriteFile("/sdcard/outputlog.txt", output);
			edt.SetText(output);
		}
	}
}