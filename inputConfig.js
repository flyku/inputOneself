$(function() {
	/*保存*/
	$("#save").on("click", function() {
		//询问框
		/*layer.confirm("保存成功！", {
			btn: ['确定'], //按钮
			title: "提示"
		}, function() {
			layer.msg("保存成功！", {
				icon: 1
			});
			window.location.href = "companyInputConfig.html";
		});*/
		layer.msg("保存成功！", {
			icon: 1
		}, function() {
			window.location.href = "companyInputConfig.html";
		});
	});
	/*多选点击事件*/

	function clicks() {
		/*改变选框*/
		$(".checkboxMargin div input,.input-list input").off().on("click", function() {
			if ($(this).attr("name") == "data") {
				WdatePicker({
					maxDate: '(%y+1)-%m-%d'
				});
			} else {
				if ($(this).attr("type") == "checkbox") {
					if ($(this).is(':checked')) {
						$(this).parent("div").addClass("lableHover")
					} else {
						$(this).parent("div").removeClass("lableHover");
					}
				} else {
					var flag = false;
					if (flag) {
						$(this).parent("div").removeClass("lableRadioHover");
						$("input[name = radios]").parent("div").addClass("lableRadioHover");
						flag = false;
					} else {
						$("input[name = radios]").parent("div").removeClass("lableRadioHover");
						$(this).parent("div").addClass("lableRadioHover");
						flag = true;
					}
				};
			}
		});

		/*点击删除子节点*/
		$(".nameDels").off().on("click", function() {
			var that = this;
			nodeDelete(that);
		});
		/*点击编辑子节点*/
		$(".nameEdit").off().on("click", function() {
			var that = this;
			var inputValue = $(this).prev().text();
			$(that).prev().html('<input class="inputEdit" type="text" value="' + inputValue + '">');
			$(that).prev().children("input").focus();
			$(that).prev().children().blur(function() {
				var conts = $(that).prev().children().val();
				$(that).prev().text(conts);
			})
		});
	}

	function edits() {
		/*删除事件*/
		$(".dels").off().on("click", function() {
			var that = this;
			nodeDelete(that);
		});
		/*点击编辑name*/
		$(".edit").off().on("click", function() {
			var that = this;
			var inputValue = $(this).parent().prev().text();
			$(that).parent().prev().html('<input class="nameEdit" type="text" value="' + inputValue + '">');
			$(that).parent().prev().children("input").focus();
			/*function() {this.select();}*/
			$(that).parent().prev().children().blur(function() {
				var conts = $(that).parent().prev().children().val();
				$(that).parent().prev().text(conts);
			})
		});
		/*删除事件*/
		$(".onlyDels").off().on("click", function() {
			var that = this;
			$(that).parent().remove();
		});
		/*点击编辑name*/
		$(".onlyedit").off().on("click", function() {
			var that = this;
			var inputValue = $(this).next().text();
			$(that).next().html('<input class="nameEdit" type="text" value="' + inputValue + '">');
			$(that).next().children("input").focus();
			/*function() {this.select();}*/
			$(that).next().children().blur(function() {
				var conts = $(that).next().children().val();
				$(that).next().text(conts);
			})
		});
	}

	/*添加*/
	var num1 = num2 = num3 = 2;

	function rightAdd() {
		$(".add").off().on("click", function() {
			//alert($(this).parent().children().children().children("input").attr("type"))
			if ($(this).parent().children().children().children("span").hasClass("double")) {
				num1++;
				var doubleHtml = '<span class="checkboxMargin"><div><input type="checkbox"><span class="checkboxSpan double">复选框' + num1 + '</span><a class="nameEdit" href="###"></a><a class="nameDels" href="###"></a></div></span>';
				$(this).parent().append(doubleHtml);
				clicks();
				edits();
			} else if ($(this).parent().children().children().children("span").hasClass("downOption")) {
				num2++;
				var downOptionHtml = '<span class="checkboxMargin"><div><input type="checkbox"><span class="checkboxSpan downOption">下拉框' + num2 + '</span><a class="nameEdit" href="###"></a><a class="nameDels" href="###"></a></div></span>';
				$(this).parent().append(downOptionHtml);
				clicks();
				edits();
			} else {
				num3++;
				var onlyRadioHtml = '<span class="checkboxMargin"><div class="radioLables"><input name="radios" type="radio"><span class="checkboxSpan onlyRadio">单选按钮' + num3 + '</span><a class="nameEdit" href="###"></a><a class="nameDels" href="###"></a></div></span>';
				$(this).parent().append(onlyRadioHtml);
				clicks();
				edits();
			}
			if ($(".right-cont").height() > 970) {
				$(".inputConfig-left").height($(".right-cont").height() - 2);
			}
		});
	}

	/*弹窗提示*/

	function nodeDelete(that) {
		//询问框
		/*layer.confirm(cont, {
			btn: ['确定', '取消'], //按钮
			title: title
		}, function() {
			layer.msg(msg, {
				icon: 1
			});
		});*/
		$(that).parent().parent().remove();
	}

	/*左侧添加*/
	$("#input-list li").off().on("click", function() {
		var indexs = $(this).index() + 1,
			that = this;
		var html1 = '<div class="input-list"><a class="onlyedit" href="###"></a><span class="inputNames">单行文本框</span><input type="text"><a class="onlyDels" href="###"></a></div>',
			html2 = '<div class="input-list pTxtarea"><a class="onlyedit" href="###"></a><span>多行文本框</span><textarea type="text"></textarea><a class="onlyDels" href="###"></a></div>',
			html3 = '<div class="input-list"><span class="inputNames">复选框</span><span class="aSpan"><a class="edit" href="###"></a><a class="add" href="###"></a><a class="dels" href="###"></a><span class="checkboxMargin"><div><input type="checkbox"><span class="checkboxSpan double">复选框1</span><a class="nameEdit" href="###"></a><a class="nameDels" href="###"></a></div></span><span class="checkboxMargin"><div><input type="checkbox"><span class="checkboxSpan double">复选框2</span><a class="nameEdit" href="###"></a><a class="nameDels" href="###"></a></div></span></span></div>',
			html4 = '<div class="input-list"><span class="inputNames">单选按钮</span><span class="aSpan"><a class="edit" href="###"></a><a class="add" href="###"></a><a class="dels" href="###"></a><span class="checkboxMargin"><div class="radioLables"><input name="radios" type="radio"><span class="checkboxSpan onlyRadio">单选按钮1</span><a class="nameEdit" href="###"></a><a class="nameDels" href="###"></a></div></span><span class="checkboxMargin"><div class="radioLables"><input name="radios" type="radio"><span class="checkboxSpan onlyRadio">单选按钮2</span><a class="nameEdit" href="###"></a><a class="nameDels" href="###"></a></div></span></span></div>',
			html5 = '<div class="input-list"><span class="inputNames">下拉列表框</span><span class="aSpan"><a class="edit" href="###"></a><a class="add" href="###"></a><a class="dels" href="###"></a><span class="checkboxMargin"><div><input type="checkbox"><span class="checkboxSpan downOption">下拉项1</span><a class="nameEdit" href="###"></a><a class="nameDels" href="###"></a></div></span><span class="checkboxMargin"><div><input type="checkbox"><span class="checkboxSpan downOption">下拉项2</span><a class="nameEdit" href="###"></a><a class="nameDels" href="###"></a></div></span></span></div>',
			html6 = '<div class="input-list"><a class="onlyedit" href="###"></a><span class="inputNames">日期</span><input name="data" type="text"><a class="dailys"></a><a class="onlyDels" href="###"></a></div>',
			html7 = '<div class="input-list"><a class="onlyedit" href="###"></a><span class="uploadSpan">上传附件</span><div class="fl"><div class="u-file-c fl u-file-btn"><i class="glass-icon"></i><input type="file" id="File" name="file" aria-invalid="false" class="valid">浏览</div><span class="fileName">未上传文件</span></div><a class="onlyDels" href="###"></a></div>';
		switch (indexs) {
			case 1:
				$("#inputConfig-right").append(html1);
				break;
			case 2:
				$("#inputConfig-right").append(html2);
				break;
			case 3:
				$("#inputConfig-right").append(html3);
				break;
			case 4:
				$("#inputConfig-right").append(html4);
				break;
			case 5:
				$("#inputConfig-right").append(html5);
				break;
			case 6:
				$("#inputConfig-right").append(html6);
				break;
			case 7:
				$("#inputConfig-right").append(html7);
				break;
			default:
				break;
		}
		$(that).addClass("liCurrent").siblings().removeClass("liCurrent");
		clicks();
		edits();
		rightAdd();
		if ($(".right-cont").height() > 970) {
			$(".inputConfig-left").height($(".right-cont").height() - 2);
		}
	})
})