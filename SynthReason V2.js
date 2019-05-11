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

   // using https://newsapi.org !
var output = "";
var outputprep = "";
var outputprepweb = "";
var x = 0;
var quit = 0;
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
	var fmax = 4;

	for (x = 0; x < 3; x++)
	{



		// //fmax = Math.floor(Math.random() * (7)) + 0;

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
				if (dic.indexOf(words[b - 1]) > -1 && dic.indexOf(words[b]) > -1
					&& dic.indexOf(words[b + 1]) > -1 && noun.indexOf(words[b + 1]) > -1)
				{
					outputprep = words[b - 1] + " " + words[b] + " " + words[b + 1] + " ";

					if (outputprep.indexOf("ideology") > -1
						|| outputprep.indexOf("knowledge") > -1
						|| outputprep.indexOf("debate") > -1
						|| outputprep.indexOf("language") > -1
						|| outputprep.indexOf("voting") > -1)
					{
						txt = app.ReadFile("/sdcard/politics.txt");
						sentence = txt.split(".");
						// fmax = Math.floor(Math.random() * (20)) + 10;
						break;
					}


					if (outputprep.indexOf("medicine") > -1
						|| outputprep.indexOf("disease") > -1 || outputprep.indexOf("ill") > -1
						|| outputprep.indexOf("health") > -1 || outputprep.indexOf("sick") > -1)
					{
						txt = app.ReadFile("/sdcard/medicine.txt");
						sentence = txt.split(".");
						// fmax = Math.floor(Math.random() * (20)) + 10;
						break;
					}

					if (outputprep.indexOf("destruction") > -1
						|| outputprep.indexOf("violence") > -1
						|| outputprep.indexOf("murder") > -1
						|| outputprep.indexOf("ethics") > -1 || outputprep.indexOf("kill") > -1
						|| outputprep.indexOf("death") > -1 || outputprep.indexOf("attack") > -1)
					{
						txt = app.ReadFile("/sdcard/ethics.txt");
						sentence = txt.split(".");
						// fmax = Math.floor(Math.random() * (5)) + 0;
						break;
					}




					if (outputprep.indexOf("philosophy") > -1
						|| outputprep.indexOf("thought") > -1
						|| outputprep.indexOf("reason") > -1 || outputprep.indexOf("idea") > -1
						|| outputprep.indexOf("theory") > -1
						|| outputprep.indexOf("living") > -1 || outputprep.indexOf("idea") > -1)
					{
						txt = app.ReadFile("/sdcard/philosophy.txt");
						sentence = txt.split(".");
						// fmax = Math.floor(Math.random() * (30)) + 10;
						break;
					}


					if (outputprep.indexOf("business") > -1 || outputprep.indexOf("work") > -1
						|| outputprep.indexOf("money") > -1 || outputprep.indexOf("leader") > -1)
					{
						txt = app.ReadFile("/sdcard/business.txt");
						sentence = txt.split(".");
						// fmax = Math.floor(Math.random() * (15)) + 10;
						break;
					}

					if (outputprep.indexOf("society") > -1
						|| outputprep.indexOf("environment") > -1
						|| outputprep.indexOf("people") > -1 || outputprep.indexOf("life") > -1
						|| outputprep.indexOf("group") > -1
						|| outputprep.indexOf("society") > -1
						|| outputprep.indexOf("language ") > -1)
					{
						txt = app.ReadFile("/sdcard/envsoc.txt");
						sentence = txt.split(".");
						// fmax = Math.floor(Math.random() * (25)) + 10;
						break;
					}


					if (outputprep.indexOf("strategy") > -1 || outputprep.indexOf("maze") > -1
						|| outputprep.indexOf("system") > -1
						|| outputprep.indexOf("intelligence") > -1
						|| outputprep.indexOf("process") > -1)
					{
						txt = app.ReadFile("/sdcard/artificialintelligence.txt");
						sentence = txt.split(".");
						// fmax = Math.floor(Math.random() * (10)) + 5;
						break;
					}


					if (output.indexOf(outputprep) == -1)
					{



						output += outputprep;
						outputprepweb += words[b - 1] + "+" + words[b] + "+" + words[b + 1] + "+";



						edt.SetText(output);
						counter++;
						app.SetClipboardText(output);
					}
				}
			}
		}
		output += ".\n\n";

		/* var checklength = output.split("."); if (checklength.length > 17){
		   output = ""; } */


var outputprepwebarr =	outputprepweb.split("+")

var join = outputprepwebarr[outputprepwebarr.length-2] + "+" + outputprepwebarr[outputprepwebarr.length-1] + "+" + outputprepwebarr[outputprepwebarr.length];
var url = "https://newsapi.org/v2/everything?q=" + join  + "&apiKey=6d679940df644c65bdff8688f76f5ad0";


		httpRequest = new XMLHttpRequest();
		httpRequest.open("GET", url, true);
		httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		httpRequest.onreadystatechange = function()
		{
			HandleReply(httpRequest);
		};
		httpRequest.send();


		outputprepweb = "";


		// Resources generation
		app.WriteFile("/sdcard/helloworld.txt", output);
		edt.SetText(output);

	}
}



function HandleReply(httpRequest)
{
	if (httpRequest.readyState == 4)
	{
		if (httpRequest.status == 200)
		{
			resTxt = httpRequest.responseText;
			app.ShowPopup(resTxt);
			var txt = resTxt;
			var sentence = txt.split(".");
			app.WriteFile("/sdcard/helloworldwideweb.txt", resTxt, "append");

		}
	}
}