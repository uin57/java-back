package com.hs3.admin.controller.roles;

import com.hs3.admin.controller.AdminController;
import com.hs3.db.Page;
import com.hs3.entity.roles.FirstMenu;
import com.hs3.entity.roles.Jurisdiction;
import com.hs3.entity.roles.SecondMenu;
import com.hs3.models.Jsoner;
import com.hs3.models.PageData;
import com.hs3.models.roles.JurisdictionEx;
import com.hs3.service.roles.JurisdictionService;
import com.hs3.utils.ListUtils;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;


@Controller
@Scope("prototype")
@RequestMapping({"/admin/jur"})
public class JurController
        extends AdminController {
    @Autowired
    private JurisdictionService jurisdictionService;

    @RequestMapping({"/index"})
    public Object index() {
        ModelAndView mv = getView("/roles/jur");
        return mv;
    }

    @ResponseBody
    @RequestMapping({"/list"})
    public Object list() {
        Page p = getPageWithParams();
        List<JurisdictionEx> list = this.jurisdictionService.listEx(p);
        return new PageData(p.getRowCount(), list);
    }

    @ResponseBody
    @RequestMapping({"/listByFirstMenu"})
    public Object listByFirstMenu() {
        List<FirstMenu> list = this.jurisdictionService.listByFirstMenu();
        return list;
    }

    @ResponseBody
    @RequestMapping({"/listBySecondMenu"})
    public Object listBySecondMenu(Integer firstMenuId) {
        List<SecondMenu> list = this.jurisdictionService.listBySecondMenu(firstMenuId);
        return list;
    }

    @ResponseBody
    @RequestMapping(value = {"/add"}, method = {org.springframework.web.bind.annotation.RequestMethod.POST})
    public Object add(Jurisdiction m) {
        if ((m.getPath() == null) || ("".equals(m.getPath()))) {
            return Jsoner.error("路径不允许为空");
        }
        if ((m.getRemark() == null) || ("".equals(m.getRemark()))) {
            return Jsoner.error("描述不允许为空");
        }
        this.jurisdictionService.save(m);
        return Jsoner.success();
    }

    @ResponseBody
    @RequestMapping(value = {"/edit"}, method = {org.springframework.web.bind.annotation.RequestMethod.GET})
    public Object edit(String id) {
        return this.jurisdictionService.findEx(id);
    }

    @ResponseBody
    @RequestMapping(value = {"/edit"}, method = {org.springframework.web.bind.annotation.RequestMethod.POST})
    public Object edit(Jurisdiction m) {
        if ((m.getPath() == null) || ("".equals(m.getPath()))) {
            return Jsoner.error("路径不允许为空");
        }
        if ((m.getRemark() == null) || ("".equals(m.getRemark()))) {
            return Jsoner.error("描述不允许为空");
        }
        if (this.jurisdictionService.update(m) == 1) {
            return Jsoner.success();
        }
        return Jsoner.error();
    }

    @ResponseBody
    @RequestMapping(value = {"/delete"}, method = {org.springframework.web.bind.annotation.RequestMethod.GET})
    public Object delete(String id) {
        List<Integer> ids = ListUtils.toIntList(id);
        return Jsoner.getByResult(this.jurisdictionService.delete(ids));
    }
}
