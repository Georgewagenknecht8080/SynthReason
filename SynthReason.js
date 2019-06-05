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
var loop = 5;

	var array1 = "thought,reason,logic,idea,purpose,life";
	var array2 = "hack,attack,evil,kill,killing,destroy,virus,infect";
	var array3 = "liberty,politics,function,ideology,human";
	var array4 = "build,construct,design,fabricate,use,model,chart";
					
function OnStart()
{
	lay = app.CreateLayout("linear", "VCenter,FillXY");

	edtin = app.CreateTextEdit("", 0.96, 0.05);
	edtin.SetTextSize(8);
	lay.AddChild(edtin);

	edt = app.CreateTextEdit("", 0.96, 0.8);
	edt.SetTextSize(8);
	lay.AddChild(edt);
	btnLoad = app.CreateButton("Init", 0.23, 0.1);
	btnLoad.SetOnTouch(btn_OnTouch);
	lay.AddChild(btnLoad);
	app.AddLayout(lay);
}

function btn_OnTouch()
{
	var bootloader = app.ReadFile("/sdcard/philosophy.txt");
	bootloader = app.ReadFile("/sdcard/selfawareness.txt");
	bootloader += app.ReadFile("/sdcard/consciousness.txt");
	bootloader += app.ReadFile("/sdcard/mind.txt");
	
	var sentencea = bootloader.split(".");
	var aa = Math.floor(Math.random() * (sentencea.length)) + 0;
	var sentencestra = sentencea[aa];
	while (0 == 0)
	{
		var txt = bootloader;

		var sentence = txt.split(".");
		var fmax = loop;
		for (var x = 0; x < 20; x++)
		{
			var noun = app.ReadFile("/sdcard/noun.txt");
			var adv = app.ReadFile("/sdcard/adv.txt");
			var adj = app.ReadFile("/sdcard/adj.txt");
			var dic = app.ReadFile("/sdcard/words.txt");
			var counter = 0;
				outputprep = "";
			while (counter < fmax)
			{
				var a = Math.floor(Math.random() * (sentence.length)) + 0;
				var sentencestr = sentence[a];
				var words = sentencestr.split(" ");
				var b = Math.floor(Math.random() * (words.length - 4)) + 0;
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
							outputprep +=
								words[b - 4] + " " + words[b - 3] + " " + words[b - 2] + " " +
								words[b - 1] + " " + words[b] + " " + words[b + 1] + " " +
								words[b + 2] + " " + words[b + 3] + ", ";
						}
					
						var array = array1.split(",");
						for (var traverse = 0; traverse < array.length; traverse++)
						{
							if (outputprep.indexOf(array[traverse]) > -1)
							{
								if (words[b + 2] !== undefined && words[b + 3] !== undefined
									&& words[b + 4] !== undefined && words[b + 5] !== undefined)

								{
		app.ShowPopup("philosophy");
			var x = Math.floor(Math.random() * (words.length)) + 0;
			array1 += "," + words[x];
									outputprep +=  " " + words[b + 2] + " " + words[b + 3] + " " + words[b + 4] +	" " + words[b + 5] + " ";
								}
						
								break;
							}
						}
							var array = array2.split(",");
						for (var traverse = 0; traverse < array.length; traverse++)
						{
							if (outputprep.indexOf(array[traverse]) > -1)
							{

								if (words[b + 2] !== undefined && words[b + 3] !== undefined
									&& words[b + 4] !== undefined && words[b + 5] !== undefined)
								{

									outputprep += " " +words[b + 2] + " " + words[b + 3] + " " + words[b + 4] + " " + words[b + 5] + " ";
													var x = Math.floor(Math.random() * (words.length)) + 0;
			array2 += "," + words[x];
															app.ShowPopup("ethics");
											}

								break;
							}
						}
						
						
							var array = array3.split(",");
						for (var traverse = 0; traverse < array.length; traverse++)
						{
							if (outputprep.indexOf(array[traverse]) > -1)
							{

								if (words[b + 2] !== undefined && words[b + 3] !== undefined
									&& words[b + 4] !== undefined && words[b + 5] !== undefined)
								{

									outputprep += " " +words[b + 2] + " " + words[b + 3] + " " + words[b + 4] + " " + words[b + 5] + " ";
													var x = Math.floor(Math.random() * (words.length)) + 0;
			array2 += "," + words[x];
															app.ShowPopup("humanities");
											}

								break;
							}
						}
				
							var array = array4.split(",");
						for (var traverse = 0; traverse < array.length; traverse++)
						{
							if (outputprep.indexOf(array[traverse]) > -1)
							{

								if (words[b + 2] !== undefined && words[b + 3] !== undefined
									&& words[b + 4] !== undefined && words[b + 5] !== undefined)
								{

									outputprep += " " +words[b + 2] + " " + words[b + 3] + " " + words[b + 4] + " " + words[b + 5] + " ";
													var x = Math.floor(Math.random() * (words.length)) + 0;
			array2 += "," + words[x];
															app.ShowPopup("technological");
											}

								break;
							}
						}
				
						
						
						if (output.indexOf(outputprep) == -1)
						{
					if(fmax == loop){
							counter++;
							output += edtin.GetText() + ": " + outputprep;
							edt.SetText(output);
					
				
						app.WriteFile("/sdcard/outputlog.txt", output, "append");
							output = "";
						
								}
						}
					}
				}
			}
		}
	}
}