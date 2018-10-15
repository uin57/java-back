<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ taglib prefix="sjc" uri="http://www.sjc168.com"%>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<script type="text/javascript">
	$(function() {
		var options = {
			columns : [ [ {
				field : 'url',
				title : '域名'
			},{
				field : 'other',
				title : '操作',
				formatter : function(value, row) {
					var win ="'#win'";
					var url = "'edit'";
					var dat = "'edit?id=" + row.id +"'";
					var txt ='<sjc:auth url="/admin/domain/delete"><a href="#" onClick="del(\'delete?id=' + row.id +'\',function(rel){reloadGrid(\'#grid\')})">删除</a></sjc:auth>&nbsp;';
					return txt;
				}
			}] ]
		};
		createGrid('#grid',options);
		createWin("#win");
	});
</script>
</head>
<body>
	<div id="grid"></div>
	<div id="tb">
		<div>
			<sjc:auth url="/admin/domain/add"><a href="#" plain="true" icon="icon-add" class="easyui-linkbutton" onClick="showWin('#win','add')">添加</a></sjc:auth>
			<sjc:auth url="/admin/domain/delete"><a href="#" plain="true" icon="icon-remove" class="easyui-linkbutton" onClick="delAll('delete','#grid')">删除</a></sjc:auth>
		</div>
	</div>
	<div id="win">
		<form method="post" style="margin: 20px;">
			<input type="hidden" name="id" />
			<table class="formtable">
				<tr>
					<td class="input-title">域名</td>
					<td><input type="text" name="url" /></td>
				</tr>
			</table>
			<div style="text-align: center; padding: 5px;">
				<a href="#" class="btn-save" icon="icon-save" onClick="saveData(this, function(rel){ closeWin('#win','#grid')})">保存</a>
				<a href="#" class="btn-cancel" icon="icon-cancel" onClick="closeWin('#win')">取消</a>
			</div>
		</form>
	</div>
</body>
</html>