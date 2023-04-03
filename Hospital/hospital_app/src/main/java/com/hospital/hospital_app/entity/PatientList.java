package com.hospital.hospital_app.entity;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "PatientList")

public class PatientList {


        //hid is foreign key refrencing centralhospital hospital_id with on delete cascade 
        @ManyToOne(fetch = FetchType.LAZY)
        @OnDelete(action = OnDeleteAction.CASCADE)
        @JoinColumn(name = "hospital_id")
        @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
        private CentralHospital centralHospital1;

        @Id
        // @Pattern(regexp = "^\\d{12}$", message = "Please enter a valid aadhar number")
        @NotBlank(message = "patient aadhar number can not be empty")
        private String patient_aadhar;

        

}
