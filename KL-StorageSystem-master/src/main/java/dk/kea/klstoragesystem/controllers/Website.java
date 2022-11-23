package dk.kea.klstoragesystem.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Website {


    // ------------ DASHBOARD Page ------------ //
    @GetMapping(value = {"/","/dashboard"})
    public String renderDashboard() {
        return "dashboard/dashboard.html";
    }

    // ------------ Add Unit Page ------------ //
    @GetMapping("/addUnit")
    public String renderAddUnit() {
        return "addUnit/addUnit.html";
    }

    // ------------ Remove Unit Page ------------ //
    @GetMapping("/removeUnit")
    public String renderRemoveUnit() {
        return "removeUnit/removeUnit.html";
    }

    // ------------ Invoice Page ------------ //
    @GetMapping("/invoice")
    public String renderInvoice() {
        return "invoice/invoice.html";
    }

    // ------------ Storage Status Page ------------ //
    @GetMapping("/storageStatus")
    public String renderStorage() {
        return "storageStatus/storageStatus.html";
    }
}
