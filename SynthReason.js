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

function OnStart()
{
	lay = app.CreateLayout("linear", "VCenter,FillXY");
	edt = app.CreateTextEdit("", 0.96, 0.9);
	edt.SetTextSize(6);
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
		var txt = app.ReadFile("/sdcard/philosophy.txt");
		var sentence = txt.split(".");
		var fmax = 4;
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
				if (words[b - 1] !== undefined && words[b] !== undefined
					&& words[b + 1] !== undefined && words[b + 1].length > 5)
				{
					if (dic.indexOf(words[b - 2]) > -1 && dic.indexOf(words[b - 1]) > -1
						&& dic.indexOf(words[b]) > -1 && dic.indexOf(words[b + 1]) > -1
						&& noun.indexOf(words[b]) > -1)
					{
						outputprep = words[b - 3] + " " + words[b - 2] + " " + words[b - 1] + " " + words[b] + " " + words[b + 1] + " ";
						var popup = 1;



						if (outputprep.indexOf("kill") > -1
							|| outputprep.indexOf("death") > -1
							|| outputprep.indexOf("attack") > -1)
						{
							txt = app.ReadFile("/sdcard/ethics.txt");
								app.ShowPopup("ethics" );
							sentence = txt.split(".");
							break;
						}

						if (outputprep.indexOf("thought") > -1
							|| outputprep.indexOf("reason") > -1
							|| outputprep.indexOf("theory") > -1
							|| outputprep.indexOf("living") > -1
							|| outputprep.indexOf("idea") > -1)
						{
							txt = app.ReadFile("/sdcard/philosophy.txt");
								app.ShowPopup("philosophy" );
							sentence = txt.split(".");
							break;
						}

						if (outputprep.indexOf("people") > -1 || outputprep.indexOf("life") > -1
							|| outputprep.indexOf("group") > -1
							|| outputprep.indexOf("society") > -1
							|| outputprep.indexOf("language ") > -1)
						{
							txt = app.ReadFile("/sdcard/envsoc.txt");
								app.ShowPopup("envionment & society" );
							sentence = txt.split(".");
							fmax++;
							break;
						}

						if (outputprep.indexOf("knowledge") > -1
							|| outputprep.indexOf("strategy") > -1
							|| outputprep.indexOf("maze") > -1 || outputprep.indexOf("system") > -1
							|| outputprep.indexOf("intelligence") > -1
							|| outputprep.indexOf("process") > -1)
						{
							txt = app.ReadFile("/sdcard/artificialintelligence.txt");
								app.ShowPopup("artificial intelligence" );
							sentence = txt.split(".");
							break;
						}

						if (output.indexOf(outputprep) == -1)
						{
							output += outputprep;
							edt.SetText(output);
							counter++;
							app.SetClipboardText(output);
						}
					}
				}
			}
			output += ".\n\n";
			edt.SetText(output);
		}
	}
}