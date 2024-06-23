package com.example.restaurant.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String status;
    private String deliveryTime;

    @OneToMany
    private List<MenuItem> items;

    // Getters and setters
}
