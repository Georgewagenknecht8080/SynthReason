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
var lag = 0;

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

		var txt = app.ReadFile("/sdcard/philosophy.txt");
		

		var sentence = txt.split(".");
		var fmax = 5;
	while (0 == 0)
	{
	
	
		
		//fmax = Math.floor(Math.random() * (7)) + 0;

		var noun = app.ReadFile("/sdcard/noun.txt");
		var dic = app.ReadFile("/sdcard/dictionary.txt");
		var counter = 0;
		while (counter < fmax)
		{
			var a = Math.floor(Math.random() * (sentence.length)) + 0;
			var sentencestr = sentence[a];
			var words = sentencestr.split(" ");
			var b = Math.floor(Math.random() * (words.length - 1)) + 0;
			if (words[b - 1] !== undefined && words[b] !== undefined && words[b + 1] !== undefined && words[b + 1].length > 5 ){
				if (dic.indexOf(words[b - 1]) > -1 && dic.indexOf(words[b]) > -1 && dic.indexOf(words[b + 1]) > -1){
					outputprep = words[b - 1] + " " + words[b] + " " + words[b + 1] + " ";
			
			
			
					if (outputprep.indexOf("ideology") > -1 || outputprep.indexOf("knowledge") > -1 || outputprep.indexOf("debate") > -1 || outputprep.indexOf("language") > -1 ){
					txt = app.ReadFile("/sdcard/politics.txt");
					sentence = txt.split(".");
					break;
					}
					
					if (outputprep.indexOf("religion") > -1 || outputprep.indexOf("spiritual") > -1 || outputprep.indexOf("believe") > -1 || outputprep.indexOf("belief") > -1 || outputprep.indexOf("spirit") > -1  || outputprep.indexOf("Spirit") > -1 ){
					txt = app.ReadFile("/sdcard/zen.txt");
					sentence = txt.split(".");
					break;
					}
			
							if (outputprep.indexOf("medicine") > -1 || outputprep.indexOf("disease") > -1 || outputprep.indexOf("ill") > -1 || outputprep.indexOf("health") > -1 || outputprep.indexOf("sick") > -1){
					txt = app.ReadFile("/sdcard/medicine.txt");
					sentence = txt.split(".");
					break;
					}
			
			
			
							if (outputprep.indexOf("ethics") > -1 || outputprep.indexOf("kill") > -1 || outputprep.indexOf("death") > -1 || outputprep.indexOf("attack") > -1){
					txt = app.ReadFile("/sdcard/ethics.txt");
					sentence = txt.split(".");

					break;
					}
			
		
							if (outputprep.indexOf("science") > -1 || outputprep.indexOf("design") > -1 || outputprep.indexOf("think") > -1 || outputprep.indexOf("create") > -1 || outputprep.indexOf("model") > -1){
					txt = app.ReadFile("/sdcard/science.txt");
					sentence = txt.split(".");
					break;
					}
			
							if (outputprep.indexOf("technology") > -1 || outputprep.indexOf("build") > -1 || outputprep.indexOf("create") > -1 || outputprep.indexOf("make") > -1){
					txt = app.ReadFile("/sdcard/tech.txt");
					sentence = txt.split(".");
					break;
					}
	
							if (outputprep.indexOf("philosophy") > -1 || outputprep.indexOf("thought") > -1 || outputprep.indexOf("reason") > -1 || outputprep.indexOf("idea") > -1 || outputprep.indexOf("theory") > -1  || outputprep.indexOf("living") > -1   || outputprep.indexOf("idea") > -1 ){
					txt = app.ReadFile("/sdcard/philosophy.txt");
						sentence = txt.split(".");
			fmax = Math.floor(Math.random() * (20)) + 6;
					break;
					}
	
	
							if (outputprep.indexOf("business") > -1 || outputprep.indexOf("work") > -1 || outputprep.indexOf("money") > -1 || outputprep.indexOf("leader") > -1){
					txt = app.ReadFile("/sdcard/business.txt");
							fmax = Math.floor(Math.random() * (30)) + 10;
					sentence = txt.split(".");
					break;
					}
		
							if (outputprep.indexOf("society") > -1 || outputprep.indexOf("environment") > -1 || outputprep.indexOf("people") > -1 || outputprep.indexOf("life") > -1 || outputprep.indexOf("group") > -1 || outputprep.indexOf("society") > -1|| outputprep.indexOf("language ") > -1){
					txt = app.ReadFile("/sdcard/envsoc.txt");
									fmax = Math.floor(Math.random() * (20)) + 5;
					sentence = txt.split(".");
					fmax++;
					break;
					}
					
					
							if (outputprep.indexOf("knowledge") > -1 || outputprep.indexOf("strategy") > -1 || outputprep.indexOf("maze") > -1 || outputprep.indexOf("system") > -1 || outputprep.indexOf("intelligence") > -1 || outputprep.indexOf("process") > -1){
					txt = app.ReadFile("/sdcard/artificialintelligence.txt");
					fmax = Math.floor(Math.random() * (10)) + 5;
					sentence = txt.split(".");
					break;
					}
					if (output.indexOf(outputprep) == -1)
					{
						output += outputprep;
						edt.SetText(output);

						counter++;
						app.SetClipboardText( output );
					}
				}
			}
		}
		output += ".\n\n";
		var now = new Date().getTime();
		var newtime = new Date().getTime() + 100;
		while (now < newtime)
		{
			now = new Date().getTime()
		}		
		//Resources generation
		app.WriteFile( "/sdcard/helloworld.txt", output);	
		edt.SetText(output);
	}
}