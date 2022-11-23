package dk.kea.klstoragesystem.controllers;

import dk.kea.klstoragesystem.models.Item;
import dk.kea.klstoragesystem.models.Unit;
import dk.kea.klstoragesystem.repositories.UnitsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * @author Julius Panduro
 */
@RestController
public class Units {

    @Autowired
    UnitsRepository units;

    @GetMapping("/units")
    public List<Unit> getUnits() {
        return units.findAll();
    }

    @GetMapping("/units/{unitId}")
    public Unit getUnitById(@PathVariable Long unitId) {
        return units.findById(unitId).get();
    }


    @PostMapping("/units")
    public Unit addUnit(@RequestBody Unit newUnit) {
        return units.save(newUnit);
    }

    @PutMapping("/units/{unitId}")
    public String updateUnitById(@PathVariable long unitId, @RequestBody Unit unitToUpdateWith) {
        if (units.existsById(unitId)) {
            unitToUpdateWith.setId(unitId);
            units.save(unitToUpdateWith);
            return "Unit is now updated";
        } else return "Unit id is not found";
    }

    @PatchMapping("/units/{unitId}")
    public String patchUnitById(@PathVariable Long unitId, @RequestBody Unit newUnit) {
        return units.findById(unitId).map(foundUnit -> {
            if (newUnit.getName() != null) foundUnit.setName(newUnit.getName());
            if (newUnit.getStorage_one() != 0) foundUnit.setStorage_one(newUnit.getStorage_one());
            if (newUnit.getStorage_two() != 0) foundUnit.setStorage_two(newUnit.getStorage_two());
            if (newUnit.getStorage_three() != 0) foundUnit.setStorage_three(newUnit.getStorage_three());
            if (newUnit.getBarcode() != null) foundUnit.setBarcode(newUnit.getBarcode());
            if (newUnit.getGrade() != null) foundUnit.setGrade(newUnit.getGrade());
            if (newUnit.getCriticalAmount() != 0) foundUnit.setCriticalAmount(newUnit.getCriticalAmount());
            if (newUnit.getLowAmount() != 0) foundUnit.setLowAmount(newUnit.getLowAmount());
            if (newUnit.getModel() != null) foundUnit.setModel(newUnit.getModel());
            if (newUnit.getType() != null) foundUnit.setModel(newUnit.getModel());
            if (newUnit.getSupplier() != null) foundUnit.setSupplier(newUnit.getSupplier());
            units.save(newUnit);
            return "Unit updated";
        }).orElse("Unit not found");
    }


    @DeleteMapping("/units/{unitId}")
    public void deleteUnitById(@PathVariable Long unitId) {
        units.deleteById(unitId);

    }

    @PatchMapping("units/adjust")
    public String adjustUnitStorage(@RequestBody List<Item> list) {
        System.out.println("you are in the method");
        for (int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i));
            Item tmpItem = list.get(i);

            Unit foundUnit = units.findById(tmpItem.getId()).get();
            Integer currentStorage = foundUnit.getStorage_one();
            int newStorage = currentStorage-tmpItem.getCount();

            foundUnit.setStorage_one(newStorage);

            units.save(foundUnit);

        }
        return "test";
    }

}
