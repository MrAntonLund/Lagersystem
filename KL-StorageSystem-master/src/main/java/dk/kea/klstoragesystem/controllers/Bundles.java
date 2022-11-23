package dk.kea.klstoragesystem.controllers;

import dk.kea.klstoragesystem.models.Bundle;
import dk.kea.klstoragesystem.repositories.BundlesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Bundles {

    @Autowired
    BundlesRepository bundles;

    @GetMapping("/bundles")
    public List<Bundle> getBundles() {
        return bundles.findAll();
    }

    @PostMapping("/bundles")
    public Bundle addBundle(@RequestBody Bundle newBundle) {
        newBundle.setId(null);
        return bundles.save(newBundle);
    }
}
