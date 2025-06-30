package com.ejemplo.reactintroduccion.config;

import com.ejemplo.reactintroduccion.model.Persona;
import com.ejemplo.reactintroduccion.repository.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private PersonaRepository personaRepository;

    @Override
    public void run(String... args) throws Exception {
        // Cargar datos de prueba si la base de datos está vacía
        if (personaRepository.count() == 0) {
            personaRepository.save(new Persona("María García", "maria@ejemplo.com", 28, "Desarrolladora"));
            personaRepository.save(new Persona("Carlos López", "carlos@ejemplo.com", 32, "Diseñador"));
            personaRepository.save(new Persona("Ana Rodríguez", "ana@ejemplo.com", 24, "Estudiante"));
            personaRepository.save(new Persona("Pedro Martínez", "pedro@ejemplo.com", 29, "Ingeniero"));
            personaRepository.save(new Persona("Laura Sánchez", "laura@ejemplo.com", 26, "Doctora"));
            
            System.out.println("Datos de prueba cargados en la base de datos.");
        }
    }
}
