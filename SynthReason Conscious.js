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
var outputprep2 = "";
var stage = 0;
function OnStart()
{
	lay = app.CreateLayout("linear", "VCenter,FillXY");
	edtin = app.CreateTextEdit("", 0.96, 0.1);
	edtin.SetTextSize(10);
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
	var bootloader = app.ReadFile("/sdcard/selfawareness.txt");
	bootloader += app.ReadFile("/sdcard/consciousness.txt");
	bootloader += app.ReadFile("/sdcard/mind.txt");
	bootloader += app.ReadFile("/sdcard/chat.txt");
	var sentencea = bootloader.split(".");
	var aa = Math.floor(Math.random() * (sentencea.length)) + 0;
	var sentencestra = sentencea[aa];
	while (0 == 0)
	{
		var txt = bootloader;
		var sentence = txt.split(".");
		var size = edtin.GetText();
		var size1 = size.split(" ");
		var fmax = size1.length;
		for (var x = 0; x < fmax; x++)
		{
			var noun = app.ReadFile("/sdcard/noun.txt");
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
	var size = edtin.GetText();
		var size1 = size.split(" ");
		var fmax = size1.length;
							outputprep2 = "";
							outputprep =
								words[b - 4] + " " + words[b - 3] + " " + words[b - 2] + " " +
								words[b - 1] + " " + words[b] + " " + words[b + 1] + " " +
								words[b + 2] + " " + words[b + 3] + ", ";


						}


		
if (outputprep.indexOf("ideology") > -1 || outputprep.indexOf("knowledge") > -1 || outputprep.indexOf("debate") > -1 || outputprep.indexOf("language") > -1 ){
					txt = app.ReadFile("/sdcard/politics.txt");
					sentence = txt.split(".");
					break;
					}
					
					if ( outputprep.indexOf("spiritual") > -1 || outputprep.indexOf("believe") > -1 || outputprep.indexOf("belief") > -1 || outputprep.indexOf("spirit") > -1  || outputprep.indexOf("Spirit") > -1 ){
					txt = app.ReadFile("/sdcard/zen.txt");
					sentence = txt.split(".");
					break;
					}
			
							if ( outputprep.indexOf("disease") > -1 || outputprep.indexOf("ill") > -1 || outputprep.indexOf("health") > -1 || outputprep.indexOf("sick") > -1){
					txt = app.ReadFile("/sdcard/medicine.txt");
					sentence = txt.split(".");
					break;
					}
			
			
			
							if (outputprep.indexOf("kill") > -1 || outputprep.indexOf("death") > -1 || outputprep.indexOf("attack") > -1){
					txt = app.ReadFile("/sdcard/ethics.txt");
					sentence = txt.split(".");
					break;
					}
			
		
							if (outputprep.indexOf("design") > -1 || outputprep.indexOf("think") > -1 || outputprep.indexOf("create") > -1 || outputprep.indexOf("model") > -1){
					txt = app.ReadFile("/sdcard/science.txt");
					break;
					}
			
							if (outputprep.indexOf("build") > -1 || outputprep.indexOf("create") > -1 || outputprep.indexOf("make") > -1){
					txt = app.ReadFile("/sdcard/tech.txt");
					break;
					}
	
							if (outputprep.indexOf("thought") > -1 || outputprep.indexOf("reason") > -1 || outputprep.indexOf("idea") > -1 || outputprep.indexOf("theory") > -1  || outputprep.indexOf("living") > -1   || outputprep.indexOf("idea") > -1 ){
					txt = app.ReadFile("/sdcard/philosophy.txt");
						sentence = txt.split(".");
					break;
					}
	
	
							if (outputprep.indexOf("work") > -1 || outputprep.indexOf("money") > -1 || outputprep.indexOf("leader") > -1){
					txt = app.ReadFile("/sdcard/business.txt");
					sentence = txt.split(".");
					break;
					}
		
							if (outputprep.indexOf("people") > -1 || outputprep.indexOf("life") > -1 || outputprep.indexOf("group") > -1 || outputprep.indexOf("society") > -1|| outputprep.indexOf("language ") > -1){
					txt = app.ReadFile("/sdcard/envsoc.txt");
					sentence = txt.split(".");
					fmax++;
					break;
					}
					
					
							if (outputprep.indexOf("knowledge") > -1 || outputprep.indexOf("strategy") > -1 || outputprep.indexOf("maze") > -1 || outputprep.indexOf("system") > -1 || outputprep.indexOf("intelligence") > -1 || outputprep.indexOf("process") > -1){
					txt = app.ReadFile("/sdcard/artificialintelligence.txt");
					sentence = txt.split(".");
					break;
					}



						if (output.indexOf(outputprep) == -1)
						{
							counter++;
							output = edtin.GetText() + ":  " + outputprep + outputprep2;
							edt.SetText(output);
						}

						output += ".\n\n\n";
						app.WriteFile("/sdcard/outputlog.txt", output, "append");
						edt.SetText(output);

						var now = new Date().getTime();
						var newtime = new Date().getTime() + 1000;
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