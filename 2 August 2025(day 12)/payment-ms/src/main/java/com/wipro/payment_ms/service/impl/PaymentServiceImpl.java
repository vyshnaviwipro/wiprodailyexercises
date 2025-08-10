package com.wipro.payment_ms.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.wipro.payment_ms.entity.Payment;
import com.wipro.payment_ms.repo.PaymentRepo;
import com.wipro.payment_ms.service.PaymentService;

@Service
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    PaymentRepo paymentRepo;

    @Override
    public void save(Payment payment) {
        paymentRepo.save(payment);
    }

    @Override
    public List<Payment> findAll() {
        return paymentRepo.findAll();
    }
}

