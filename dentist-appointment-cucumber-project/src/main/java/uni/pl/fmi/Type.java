package uni.pl.fmi;

import java.util.*;

public class Type {
 
    private String name;
    private Double price;
    private String description;
    public Set<Dentist> dentists;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

 
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
       this.description = description;
    }

    public Type() {
    }

}
