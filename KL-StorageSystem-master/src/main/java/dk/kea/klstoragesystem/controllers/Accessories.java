package dk.kea.klstoragesystem.controllers;

import dk.kea.klstoragesystem.models.Accessory;
import dk.kea.klstoragesystem.models.Item;
import dk.kea.klstoragesystem.models.Unit;
import dk.kea.klstoragesystem.repositories.AccessoriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Julius Panduro
 */
@RestController
public class Accessories {

    @Autowired
    AccessoriesRepository accessories;

    @GetMapping("/accessories")
    public List<Accessory> getAccessories() {
        return accessories.findAll();
    }

    @GetMapping("/accessories/{accessoriesId}")
    public Accessory getAccessoryById(@PathVariable Long accessoriesId) {
        return accessories.findById(accessoriesId).get();
    }

    @PostMapping("/accessories")
    public Accessory addAccessory(@RequestBody Accessory newAccessory) {
        newAccessory.setId(null);
        return accessories.save(newAccessory);
    }

    @PutMapping("/accessories/{accessoriesId}")
    public String updateAccessoryById(@PathVariable Long accessoriesId, @RequestBody Accessory accessoryToUpdateWith) {
        if (accessories.existsById(accessoriesId)) {
            accessoryToUpdateWith.setId(accessoriesId);
            accessories.save(accessoryToUpdateWith);
            return "Accessories is now updated";
        } else return "Accessories id is not found";
    }

    @PatchMapping("/accessories/{accessoriesId}")
    public String patchAccessoryById(@PathVariable Long accessoriesId, @RequestBody Accessory newAccessory) {
        return accessories.findById(accessoriesId).map(foundAccessory -> {
            if (newAccessory.getName() != null) foundAccessory.setName(newAccessory.getName());
            if (newAccessory.getStorage_one() != 0) foundAccessory.setStorage_one(newAccessory.getStorage_one());
            if (newAccessory.getStorage_two() != 0) foundAccessory.setStorage_two(newAccessory.getStorage_two());
            if (newAccessory.getStorage_three() != 0) foundAccessory.setStorage_three(newAccessory.getStorage_three());
            if (newAccessory.getBarcode() != null) foundAccessory.setBarcode(newAccessory.getBarcode());
            if (newAccessory.getGrade() != null) foundAccessory.setGrade(newAccessory.getGrade());
            if (newAccessory.getCriticalAmount() != 0)
                foundAccessory.setCriticalAmount(newAccessory.getCriticalAmount());
            if (newAccessory.getLowAmount() != 0) foundAccessory.setLowAmount(newAccessory.getLowAmount());
            if (newAccessory.getType() != null) foundAccessory.setType(newAccessory.getType());
            if (newAccessory.getModel() != null) foundAccessory.setModel(newAccessory.getModel());
            if (newAccessory.getSupplier() != null) foundAccessory.setSupplier(newAccessory.getSupplier());
            accessories.save(foundAccessory);
            return "Accessories Updated";
        }).orElse("Accessories not found");
    }

    @DeleteMapping("/accessories/{accessoriesId}")
    public void deleteAccessoryById(@PathVariable Long accessoriesId) {
        accessories.deleteById(accessoriesId);
    }

    @PatchMapping("accessories/adjust")
    public String adjustUnitStorage(@RequestBody List<Item> list) {
        System.out.println("you are in the method");
        for (int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i));
            Item tmpItem = list.get(i);

            Accessory foundUnit = accessories.findById(tmpItem.getId()).get();
            Integer currentStorage = foundUnit.getStorage_one();
            int newStorage = currentStorage-tmpItem.getCount();

            foundUnit.setStorage_one(newStorage);

            accessories.save(foundUnit);

        }
        return "test";
    }

}
