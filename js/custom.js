/**
 * Form Data Management System
 * แบบฟอร์มขึ้นทะเบียนขอใช้สิทธิตามมาตรา 35
 * 
 * @author Mr. Anucha Khemthong
 * @version 1.0.0
 * @date  มกราคม 2026
 * @description JavaScript สำหรับจัดการฟอร์มและการแสดงผลข้อมูล
 */

// แสดงช่องกรอกข้อมูลสำเร็จการศึกษา "อื่นๆ" เมื่อเลือกตัวเลือกอื่นๆ สำหรับผู้ดูแลคนพิการขอใช้สิทธิแทน
const eduOtherCaregiverRadio = document.getElementById("edu-other-caregiver");
const eduOtherCaregiverInput = document.getElementById(
  "education-other-caregiver"
);
const eduRadiosCaregiver = document.querySelectorAll(
  'input[name="education-caregiver"]'
);
eduRadiosCaregiver.forEach((radio) => {
  radio.addEventListener("change", () => {
    eduOtherCaregiverInput.style.display = eduOtherCaregiverRadio.checked
      ? "block"
      : "none";
  });
});

// แสดงช่องกรอกข้อมูลสถานะสมรส "อื่นๆ" เมื่อเลือกตัวเลือกอื่นๆ สำหรับผู้ดูแลคนพิการขอใช้สิทธิแทน
const maritalOtherRadio = document.getElementById("status-other-caregiver");
const maritalOtherInput = document.getElementById(
  "marital-status-other-caregiver"
);
const maritalRadios = document.querySelectorAll(
  'input[name="marital_status-caregiver"]'
);
maritalRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    maritalOtherInput.style.display = maritalOtherRadio.checked
      ? "block"
      : "none";
  });
});

// แสดงช่องกรอกข้อมูลการศึกษา "อื่นๆ" เมื่อเลือกตัวเลือกอื่นๆ สำหรับคนพิการขอใช้สิทธิด้วยตนเอง
const eduOtherRadio = document.getElementById("edu-other");
const eduOtherInput = document.getElementById("education-other");
const eduRadios = document.querySelectorAll('input[name="education"]');
eduRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    eduOtherInput.style.display = eduOtherRadio.checked ? "block" : "none";
  });
});

// แสดงช่องกรอกข้อมูลสถานะสมรส "อื่นๆ" เมื่อเลือกตัวเลือกอื่นๆ สำหรับผูคนพิการขอใช้สิทธิด้วยตนเอง
const otherRadio = document.getElementById("status-other");
const otherInput = document.getElementById("marital-status-other");
const radios = document.querySelectorAll('input[name="marital_status"]');
radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    otherInput.style.display = otherRadio.checked ? "block" : "none";
  });
});

// แสดงช่องกรอกข้อมูลประเภทสัมปทาน เมื่อเลือกตัวเลือกสัมปทาน
const concessionCheckbox = document.getElementById("concession-type-access");
const concessionDetailInput = document.getElementById(
  "concession-type-access-detail"
);
concessionCheckbox.addEventListener("change", () => {
  concessionDetailInput.style.display = concessionCheckbox.checked
    ? "block"
    : "none";
});

// แสดงช่องกรอกข้อมูลสถานที่จำหน่ายสินค้าหรือบริการ เมื่อเลือกตัวเลือกสถานที่จำหน่ายสินค้าหรือบริการ
const salesLocationCheckbox = document.getElementById("service-type-access");
const salesLocationDetailInput = document.getElementById(
  "service-type-access-details"
);
salesLocationCheckbox.addEventListener("change", () => {
  salesLocationDetailInput.style.display = salesLocationCheckbox.checked
    ? "block"
    : "none";
});

// แสดงช่องกรอกข้อมูลจ้างเหมาช่วงงาน หรือจ้างเหมาบริการ เมื่อเลือกตัวเลือกจ้างเหมาช่วงงาน หรือจ้างเหมาบริการ
const subcontractingCheckbox = document.getElementById(
  "subcontract-type-access"
);
const subcontractingDetailInput = document.getElementById(
  "subcontract-type-access-detail"
);
subcontractingCheckbox.addEventListener("change", () => {
  subcontractingDetailInput.style.display = subcontractingCheckbox.checked
    ? "block"
    : "none";
});

// แสดงช่องกรอกข้อมูลฝึกงาน เมื่อเลือกตัวเลือกฝึกงาน
const internshipCheckbox = document.getElementById("internship-type-access");
const internshipDetailInput = document.getElementById(
  "internship-type-access-detail"
);
internshipCheckbox.addEventListener("change", () => {
  internshipDetailInput.style.display = internshipCheckbox.checked
    ? "block"
    : "none";
});

// แสดงช่องกรอกข้อมูลจัดให้มีอุปกรณ์หรือสิ่งอำนวยความสะดวก เมื่อเลือกตัวเลือกจัดให้มีอุปกรณ์หรือสิ่งอำนวยความสะดวก
const equipmentCheckbox = document.getElementById("facilities-type-access");
const equipmentDetailInput = document.getElementById(
  "facilities-type-access-detail"
);
equipmentCheckbox.addEventListener("change", () => {
  equipmentDetailInput.style.display = equipmentCheckbox.checked
    ? "block"
    : "none";
});

// แสดงช่องกรอกข้อมูลล่ามภาษามือ เมื่อเลือกตัวเลือกล่ามภาษามือ
const interpreterCheckbox = document.getElementById("interpreter-type-access");
const interpreterDetailInput = document.getElementById(
  "interpreter-type-access-detail"
);
interpreterCheckbox.addEventListener("change", () => {
  interpreterDetailInput.style.display = interpreterCheckbox.checked
    ? "block"
    : "none";
});

// แสดงช่องกรอกข้อมูลให้ความช่วยเหลืออื่นใด เมื่อเลือกตัวเลือกให้ความช่วยเหลืออื่นใด
const otherHelpCheckbox = document.getElementById("other-type-access");
const otherHelpDetailInput = document.getElementById(
  "other-type-access-detail"
);
otherHelpCheckbox.addEventListener("change", () => {
  otherHelpDetailInput.style.display = otherHelpCheckbox.checked
    ? "block"
    : "none";
});

//  เลือกประเภทผู้ขอใช้สิทธิ
const radio_applicant_type = document.querySelectorAll(
  'input[name="applicant_type"]'
);
radio_applicant_type.forEach((radio) => {
  radio.addEventListener("change", function () {
    //  แผนที่ป้ายชื่อประเภทผู้ขอใช้สิทธิ
    const labelmap = {
      self: "ผู้พิการขอใช้สิทธิเอง",
      caregiver: "ผู้ดูแลคนพิการขอใช้สิทธิแทน",
    };

    const selectedValue = this.value;
    const right_disabilities = document.querySelectorAll(".right-disabilities");

    //  แสดงข้อมูลตามประเภทผู้ขอใช้สิทธิ
    if (selectedValue === "caregiver") {
      right_disabilities[1].style.display = "block";
      right_disabilities[0].style.display = "none";
    } else {
      right_disabilities[0].style.display = "block";
      right_disabilities[1].style.display = "none";
    }
  });
});

// สร้างข้อมูลให้กับ PDF
function createDataForPDF(data) {
  let iconStatusDistabled = document.getElementsByClassName("icon-status-distable");
  
  // คนพิการขอใช้สิทธิด้วยตนเอง
  if (data["applicant_type"] === "self") {
    iconStatusDistabled[0].innerHTML = "⊗";
    iconStatusDistabled[1].innerHTML = "Ｏ";
    const boxDistable = document.querySelectorAll(".box-distable");
    const boxCaretaker = document.querySelectorAll(".box-caretaker");
    for (let i =0; i < boxDistable.length; i++) {
      boxDistable[i].innerText = data["id_card_self"][i] || "";
      boxCaretaker[i].innerText = "";
    }
    const iconStatusTypeDistable = document.querySelectorAll(".icon-status-type-distable");
    iconStatusTypeDistable.forEach((element) => {
      const typeText = element.nextSibling.textContent.trim(); // ดึงข้อความถัดไป
      
      if ((data["disability_type[]"] ?? []).includes(typeText)) {
        element.innerHTML = "⊗";
      } else {
        element.innerHTML = "Ｏ";
      }
    });
    const iconStatusFullNameDistable = document.getElementsByClassName("icon-status-full-name-distable");
    iconStatusFullNameDistable[0].innerText = data["name_prefix"] === "ด.ช./ด.ญ." ? "⊗" : "Ｏ";
    iconStatusFullNameDistable[1].innerText = data["name_prefix"] === "นาย/นาง/นางสาว" ? "⊗" : "Ｏ";
    let full_name = (data["full_name"] || "").trim().split(" ");
    document.getElementsByClassName("fname-distable")[0].innerText = full_name[0] || "";
    document.getElementsByClassName("lname-distable")[0].innerText = full_name[1] || "";
    
    const iconStatusFullNameCaregiver = document.getElementsByClassName("icon-status-full-name-caregiver");
    iconStatusFullNameCaregiver[0].innerText = "Ｏ";
    iconStatusFullNameCaregiver[1].innerText = "Ｏ";
    iconStatusFullNameCaregiver[2].innerText = "Ｏ";
    document.getElementsByClassName("fname-caregiver")[0].innerText = "";
    document.getElementsByClassName("lname-caregiver")[0].innerText = "";

    document.getElementsByClassName("building-name-distable")[0].innerText = data["address_building"] || "";
    document.getElementsByClassName("floor-distable")[0].innerText = data["address_floor"] || "";
    document.getElementsByClassName("number-floor-distable")[0].innerText = data["address_number"] || "";
    document.getElementsByClassName("village-no-distable")[0].innerText = data["moo"] || "";
    document.getElementsByClassName("alley-distable")[0].innerText = data["soi"] || "";
    document.getElementsByClassName("road-distable")[0].innerText = data["road"] || "";
    document.getElementsByClassName("sub-district-distable")[0].innerText = data["subdistrict"] || "";
    document.getElementsByClassName("district-distable")[0].innerText = data["district"] || "";
    document.getElementsByClassName("province-distable")[0].innerText = data["province"] || "";
    document.getElementsByClassName("postal-code-distable")[0].innerText = data["postal_code"] || "";
    document.getElementsByClassName("phone-distable")[0].innerText = data["phone"] || "";
    document.getElementsByClassName("mobile-distable")[0].innerText = data["mobile"] || "";
    document.getElementsByClassName("email-distable")[0].innerText = data["email"] || "";
    document.getElementsByClassName("nearby-place-distable")[0].innerText = data["nearby_places"] || "";
    document.getElementsByClassName("birth-day-distable")[0].innerText = data['birth_day'] + '   ' + data['birth_month'] + '   ' + data['birth_year'] || "";
    document.getElementsByClassName("age-distable")[0].innerText = data["age"] || "";
    document.getElementsByClassName("nationality-distable")[0].innerText = data["nationality"] || "";
    document.getElementsByClassName("religion-distable")[0].innerText = data["religion"] || "";

    document.getElementsByClassName("building-name-caregiver")[0].innerText = "";
    document.getElementsByClassName("floor-caregiver")[0].innerText = "";
    document.getElementsByClassName("number-caregiver")[0].innerText = "";
    document.getElementsByClassName("village-no-caregiver")[0].innerText = "";
    document.getElementsByClassName("alley-caregiver")[0].innerText = "";
    document.getElementsByClassName("road-caregiver")[0].innerText = "";
    document.getElementsByClassName("sub-district-caregiver")[0].innerText = "";
    document.getElementsByClassName("district-caregiver")[0].innerText = "";
    document.getElementsByClassName("province-caregiver")[0].innerText = "";
    document.getElementsByClassName("postal-code-caregiver")[0].innerText = "";
    document.getElementsByClassName("phone-caregiver")[0].innerText = "";
    document.getElementsByClassName("mobile-caregiver")[0].innerText = "";
    document.getElementsByClassName("email-caregiver")[0].innerText = "";
    document.getElementsByClassName("nearby-place-caregiver")[0].innerText = "";
    document.getElementsByClassName("birth-day-caregiver")[0].innerText = "";
    document.getElementsByClassName("age-caregiver")[0].innerText = "";
    document.getElementsByClassName("nationality-caregiver")[0].innerText = "";
    document.getElementsByClassName("religion-caregiver")[0].innerText = "";

    const iconStatusMaritalDistable = document.getElementsByClassName("icon-status-marital-distable");
    iconStatusMaritalDistable[0].innerText = data["marital_status"] === "โสด" ? "⊗" : "Ｏ";
    iconStatusMaritalDistable[1].innerText = data["marital_status"] === "สมรส" ? "⊗" : "Ｏ";
    iconStatusMaritalDistable[2].innerText = data["marital_status"] === "อื่นๆ" ? "⊗" : "Ｏ";
    document.getElementsByClassName("marital-other-distable")[0].innerText = data["marital_status_other"] || "";

    const iconStatusMaritalCaregiver = document.getElementsByClassName("icon-status-marital-caregiver");
    iconStatusMaritalCaregiver[0].innerText = data["marital_status-caregiver"] === "Ｏ";
    iconStatusMaritalCaregiver[1].innerText = data["marital_status-caregiver"] === "Ｏ";
    iconStatusMaritalCaregiver[2].innerText = data["marital_status-caregiver"] === "Ｏ";
    document.getElementsByClassName("marital-other-caregiver")[0].innerText = "";

    const iconStatusEducationDistable = document.getElementsByClassName("icon-status-education-distable");
    iconStatusEducationDistable[0].innerText = data["education"] === "ต่ำกว่าประถมศึกษา" ? "⊗" : "Ｏ";
    iconStatusEducationDistable[1].innerText = data["education"] === "ประถมศึกษา" ? "⊗" : "Ｏ";
    iconStatusEducationDistable[2].innerText = data["education"] === "มัธยมศึกษาตอนต้น" ? "⊗" : "Ｏ";
    iconStatusEducationDistable[3].innerText = data["education"] === "มัธยมศึกษาตอนปลายหรือเทียบเท่า" ? "⊗" : "Ｏ";
    iconStatusEducationDistable[4].innerText = data["education"] === "ปริญญาตรี" ? "⊗" : "Ｏ";
    iconStatusEducationDistable[5].innerText = data["education"] === "ปริญญาโทขึ้นไป" ? "⊗" : "Ｏ";
    iconStatusEducationDistable[6].innerText = data["education"] === "อื่นๆ" ? "⊗" : "Ｏ";
    if (data["education"] === "อื่นๆ") {
      document.getElementsByClassName("education-other-distable")[0].innerText = data["education_other"] || "";
    } else {
      document.getElementsByClassName("education-other-distable")[0].innerText = "";
    }

    const iconStatusEducationCaregiver = document.getElementsByClassName("icon-status-education-caregiver");
    iconStatusEducationCaregiver[0].innerText = "Ｏ";
    iconStatusEducationCaregiver[1].innerText = "Ｏ";
    iconStatusEducationCaregiver[2].innerText = "Ｏ";
    iconStatusEducationCaregiver[3].innerText = "Ｏ";
    iconStatusEducationCaregiver[4].innerText = "Ｏ";
    iconStatusEducationCaregiver[5].innerText = "Ｏ";
    iconStatusEducationCaregiver[6].innerText = "Ｏ";
    document.getElementsByClassName("education-other-caregiver")[0].innerText = "";

    const iconStatusFullNameCaregivers = document.getElementsByClassName("icon-status-full-name-caregivers");
    iconStatusFullNameCaregivers[0].innerText = "Ｏ";
    iconStatusFullNameCaregivers[1].innerText = "Ｏ";
    document.getElementsByClassName("fname-caregivers")[0].innerText = "";
    document.getElementsByClassName("lname-caregivers")[0].innerText = "";

    const boxDistableCaregiver = document.querySelectorAll(".box-distable-caregiver");
    for (let i =0; i < boxDistableCaregiver.length; i++) {
      boxDistableCaregiver[i].innerText = "";
    }
    document.getElementsByClassName("relationship-caregiver")[0].innerText = "";
  }

  // ผู้ดูแลคนพิการขอใช้สิทธิแทนคนพิการ
  if (data["applicant_type"] === "caregiver") {
    iconStatusDistabled[1].innerHTML = "⊗";
    iconStatusDistabled[0].innerHTML = "Ｏ";
    const boxCaretaker = document.querySelectorAll(".box-caretaker");
    const boxDistable = document.querySelectorAll(".box-distable");
    for (let i =0; i < boxCaretaker.length; i++) {
      boxCaretaker[i].innerText = data["caregiver_id"][i] || "";
      boxDistable[i].innerText = "";
    }
    const iconStatusTypeDistable = document.querySelectorAll(".icon-status-type-distable");
    iconStatusTypeDistable.forEach((element) => {
      element.innerHTML = "Ｏ";
    });
    const iconStatusFullNameCaregiver = document.getElementsByClassName("icon-status-full-name-caregiver");
    iconStatusFullNameCaregiver[0].innerText = data["name_prefix_caregiver"] === "นาย" ? "⊗" : "Ｏ";
    iconStatusFullNameCaregiver[1].innerText = data["name_prefix_caregiver"] === "นาง" ? "⊗" : "Ｏ";
    iconStatusFullNameCaregiver[2].innerText = data["name_prefix_caregiver"] === "นางสาว" ? "⊗" : "Ｏ";
    let caregiver_name = (data["caregiver_name"] || "").trim().split(" ");
    document.getElementsByClassName("fname-caregiver")[0].innerText = caregiver_name[0] || "";
    document.getElementsByClassName("lname-caregiver")[0].innerText = caregiver_name[1] || "";
    const iconStatusFullNameDistable = document.getElementsByClassName("icon-status-full-name-distable");
    iconStatusFullNameDistable[0].innerText = "Ｏ";
    iconStatusFullNameDistable[1].innerText = "Ｏ";
    document.getElementsByClassName("fname-distable")[0].innerText = "";
    document.getElementsByClassName("lname-distable")[0].innerText = "";

    document.getElementsByClassName("building-name-caregiver")[0].innerText = data["address_building_caregiver"] || "";
    document.getElementsByClassName("floor-caregiver")[0].innerText = data["address_floor_caregiver"] || "";
    document.getElementsByClassName("number-caregiver")[0].innerText = data["address_number_caregiver"] || "";
    document.getElementsByClassName("village-no-caregiver")[0].innerText = data["moo_caregiver"] || "";
    document.getElementsByClassName("alley-caregiver")[0].innerText = data["soi_caregiver"] || "";
    document.getElementsByClassName("road-caregiver")[0].innerText = data["road_caregiver"] || "";
    document.getElementsByClassName("sub-district-caregiver")[0].innerText = data["subdistrict_caregiver"] || "";
    document.getElementsByClassName("district-caregiver")[0].innerText = data["district_caregiver"] || "";
    document.getElementsByClassName("province-caregiver")[0].innerText = data["province_caregiver"] || "";
    document.getElementsByClassName("postal-code-caregiver")[0].innerText = data["postal_code_caregiver"] || "";
    document.getElementsByClassName("phone-caregiver")[0].innerText = data["phone_caregiver"] || "";
    document.getElementsByClassName("mobile-caregiver")[0].innerText = data["mobile_caregiver"] || "";
    document.getElementsByClassName("email-caregiver")[0].innerText = data["email_caregiver"] || "";
    document.getElementsByClassName("nearby-place-caregiver")[0].innerText = data["nearby_places_caregiver"] || "";
    document.getElementsByClassName("birth-day-caregiver")[0].innerText = data['birth_day_caregiver'] + '   ' + data['birth_month_caregiver'] + '   ' + data['birth_year_caregiver'] || "";
    document.getElementsByClassName("age-caregiver")[0].innerText = data["age_caregiver"] || "";
    document.getElementsByClassName("nationality-caregiver")[0].innerText = data["nationality_caregiver"] || "";
    document.getElementsByClassName("religion-caregiver")[0].innerText = data["religion_caregiver"] || "";

    document.getElementsByClassName("building-name-distable")[0].innerText = "";
    document.getElementsByClassName("floor-distable")[0].innerText = "";
    document.getElementsByClassName("number-floor-distable")[0].innerText = "";
    document.getElementsByClassName("village-no-distable")[0].innerText = "";
    document.getElementsByClassName("alley-distable")[0].innerText = "";
    document.getElementsByClassName("road-distable")[0].innerText = "";
    document.getElementsByClassName("sub-district-distable")[0].innerText = "";
    document.getElementsByClassName("district-distable")[0].innerText = "";
    document.getElementsByClassName("province-distable")[0].innerText = "";
    document.getElementsByClassName("postal-code-distable")[0].innerText = "";
    document.getElementsByClassName("phone-distable")[0].innerText = "";
    document.getElementsByClassName("mobile-distable")[0].innerText = "";
    document.getElementsByClassName("email-distable")[0].innerText = "";
    document.getElementsByClassName("nearby-place-distable")[0].innerText = "";
    document.getElementsByClassName("birth-day-distable")[0].innerText = "";
    document.getElementsByClassName("age-distable")[0].innerText = "";
    document.getElementsByClassName("nationality-distable")[0].innerText = "";
    document.getElementsByClassName("religion-distable")[0].innerText = "";

    const iconStatusMaritalCaregiver = document.getElementsByClassName("icon-status-marital-caregiver");
    iconStatusMaritalCaregiver[0].innerText = data["marital_status-caregiver"] === "โสด" ? "⊗" : "Ｏ";
    iconStatusMaritalCaregiver[1].innerText = data["marital_status-caregiver"] === "สมรส" ? "⊗" : "Ｏ";
    iconStatusMaritalCaregiver[2].innerText = data["marital_status-caregiver"] === "อื่นๆ" ? "⊗" : "Ｏ";
    document.getElementsByClassName("marital-other-caregiver")[0].innerText = data["marital_status_other_caregiver"] || "";
    
    const iconStatusMaritalDistable = document.getElementsByClassName("icon-status-marital-distable");
    iconStatusMaritalDistable[0].innerText = data["marital_status"] === "Ｏ";
    iconStatusMaritalDistable[1].innerText = data["marital_status"] === "Ｏ";
    iconStatusMaritalDistable[2].innerText = data["marital_status"] === "Ｏ";
    document.getElementsByClassName("marital-other-distable")[0].innerText = "";

    const iconStatusEducationCaregiver = document.getElementsByClassName("icon-status-education-caregiver");
    iconStatusEducationCaregiver[0].innerText = data["education-caregiver"] === "ต่ำกว่าประถมศึกษา" ? "⊗" : "Ｏ";
    iconStatusEducationCaregiver[1].innerText = data["education-caregiver"] === "ประถมศึกษา" ? "⊗" : "Ｏ";
    iconStatusEducationCaregiver[2].innerText = data["education-caregiver"] === "มัธยมศึกษาตอนต้น" ? "⊗" : "Ｏ";
    iconStatusEducationCaregiver[3].innerText = data["education-caregiver"] === "มัธยมศึกษาตอนปลายหรือเทียบเท่า" ? "⊗" : "Ｏ";
    iconStatusEducationCaregiver[4].innerText = data["education-caregiver"] === "ปริญญาตรี" ? "⊗" : "Ｏ";
    iconStatusEducationCaregiver[5].innerText = data["education-caregiver"] === "ปริญญาโทขึ้นไป" ? "⊗" : "Ｏ";
    iconStatusEducationCaregiver[6].innerText = data["education-caregiver"] === "อื่นๆ" ? "⊗" : "Ｏ";
    if (data["education-caregiver"] === "อื่นๆ") {
      document.getElementsByClassName("education-other-caregiver")[0].innerText = data["education_other_caregiver"] || "";
    } else {
      document.getElementsByClassName("education-other-caregiver")[0].innerText = "";
    }

    const iconStatusEducationDistable = document.getElementsByClassName("icon-status-education-distable");
    iconStatusEducationDistable[0].innerText = "Ｏ";
    iconStatusEducationDistable[1].innerText = "Ｏ";
    iconStatusEducationDistable[2].innerText = "Ｏ";
    iconStatusEducationDistable[3].innerText = "Ｏ";
    iconStatusEducationDistable[4].innerText = "Ｏ";
    iconStatusEducationDistable[5].innerText = "Ｏ";
    iconStatusEducationDistable[6].innerText = "Ｏ";
    document.getElementsByClassName("education-other-distable")[0].innerText = "";
    
    const iconStatusFullNameCaregivers = document.getElementsByClassName("icon-status-full-name-caregivers");
    iconStatusFullNameCaregivers[0].innerText = data["name_prefix-caregiver"] === "ด.ช./ด.ญ." ? "⊗" : "Ｏ";
    iconStatusFullNameCaregivers[1].innerText = data["name_prefix-caregiver"] === "นาย/นาง/นางสาว" ? "⊗" : "Ｏ";
    let full_name_caregivers = (data["full_name_caregiver"] || "").trim().split(" ");
    document.getElementsByClassName("fname-caregivers")[0].innerText = full_name_caregivers[0] || "";
    document.getElementsByClassName("lname-caregivers")[0].innerText = full_name_caregivers[1] || "";

    const boxDistableCaregiver = document.querySelectorAll(".box-distable-caregiver");
    for (let i =0; i < boxDistableCaregiver.length; i++) {
      boxDistableCaregiver[i].innerText = data["id_card_caregiver"][i] || "";
    }

    document.getElementsByClassName("relationship-caregiver")[0].innerText = data["relationship-caregiver"] || "";
  }

  document.getElementsByClassName("disability-fullname")[0].innerText = data["representative"] || "";
  document.getElementsByClassName("disability-card-no")[0].innerText = data["disability_card_number"] || "";
  document.getElementsByClassName("caregiver-fullname")[0].innerText = data["consent_to"] || "";

  const iconStatusDisabilityConsent = document.getElementsByClassName("icon-status-disability-consent");
  iconStatusDisabilityConsent[0].innerText = data["reason-for-consent"] === "เป็นผู้เยาว์ (อายุไม่เกิน 20 ปีบริบูรณ์)" ? "⊗" : "Ｏ";
  iconStatusDisabilityConsent[1].innerText = data["reason-for-consent"] === "เป็นผู้สูงอายุ (อายุ 70 ปีขึ้นไป)" ? "⊗" : "Ｏ";
  iconStatusDisabilityConsent[2].innerText = data["reason-for-consent"] === "เป็นคนไร้ความสามารถ/เสมือนไร้ความสามารถ (พิจารณาจากคำสั่งศาล)" ? "⊗" : "Ｏ";
  iconStatusDisabilityConsent[3].innerText = data["reason-for-consent"] === "เป็นคนพิการซึ่งมีสภาพความพิการ" ? "⊗" : "Ｏ";

  document.getElementsByClassName("disability-fullname-2")[0].innerText = data["disability_signature"] || "";
  document.getElementsByClassName("disability-sign-date")[0].innerText = data["disability_signature_day"] || "";
  document.getElementsByClassName("disability-sign-month")[0].innerText = data["disability_signature_month"] || "";
  document.getElementsByClassName("disability-sign-year")[0].innerText = data["disability_signature_year"] || "";

  const iconStatusDisabilityRights = document.querySelectorAll(".icon-status-disability-rights");
  const checkboxGroupDisabilityRights = document.getElementsByClassName("checkbox-group-disability-rights");

  const typeTexts = [
    'สัมปทาน', 'สถานที่จำหน่ายสินค้าหรือบริการ', 'จ้างเหมาช่วงงาน หรือจ้างเหมาบริการ', 'ฝึกงาน', 'จัดให้มีอุปกรณ์หรือสิ่งอำนวยความสะดวก',
    'ล่ามภาษามือ', 'ให้ความช่วยเหลืออื่นใด'
  ];
  
  // Mapping ระหว่าง typeTexts index กับ checkboxGroup index และ field names
  const fieldMapping = [
    { checkboxIndex: 0, fields: ["concession_type_access_detail"] },
    { checkboxIndex: 1, fields: ["service_type_access_area", "service_type_access_business"] },
    { checkboxIndex: 3, fields: ["subcontract-type-access-detail"] },
    { checkboxIndex: 4, fields: ["internship_type_access_detail"] },
    { checkboxIndex: 5, fields: ["facilities_type_access_detail"] },
    { checkboxIndex: 6, fields: ["interpreter_type_access_detail"] },
    { checkboxIndex: 7, fields: ["other_type_access_detail"] }
  ];

  for (let i = 0; i < iconStatusDisabilityRights.length; i++) {
    if ((data["access_type[]"] ?? []).includes(typeTexts[i])) {
      iconStatusDisabilityRights[i].innerHTML = "⊗";
      // กำหนดค่าเฉพาะเมื่อเลือก checkbox
      const mapping = fieldMapping[i];
      mapping.fields.forEach((fieldName, idx) => {
        const checkboxIdx = mapping.checkboxIndex + idx;
        checkboxGroupDisabilityRights[checkboxIdx].innerText = data[fieldName] || "";
      });
    } else {
      iconStatusDisabilityRights[i].innerHTML = "Ｏ";
      // เคลียร์ค่าเมื่อไม่เลือก checkbox
      const mapping = fieldMapping[i];
      mapping.fields.forEach((fieldName, idx) => {
        const checkboxIdx = mapping.checkboxIndex + idx;
        checkboxGroupDisabilityRights[checkboxIdx].innerText = "";
      });
    }
  }

  let disability_rights_start_date = data['access_start_day'] + '   ' + data['access_start_month'] + '   ' + data['access_start_year'] + (data['access_start_year'] === '' ? '' : '  -  ') + data['access_end_day'] + '   ' + data['access_end_month'] + '   ' + data['access_end_year'] || "";
  document.getElementsByClassName("disability-rights-start-date")[0].innerText = disability_rights_start_date;
  document.getElementsByClassName("registered-persons-fullname-2")[0].innerText = data["applicant_signature"] || "";
  document.getElementsByClassName("registered-persons-sign-date")[0].innerText = data["applicant_signature_day"] || "";
  document.getElementsByClassName("registered-persons-sign-month")[0].innerText = data["applicant_signature_month"] || "";
  document.getElementsByClassName("registered-persons-sign-year")[0].innerText = data["applicant_signature_year"] || "";

  document.getElementsByClassName("written-place")[0].innerText = data["written_at"] || "";
  document.getElementsByClassName("no-duplicate-rights-sign-date")[0].innerText = data["written_day"] || "";
  document.getElementsByClassName("no-duplicate-rights-sign-month")[0].innerText = data["written_month"] || "";
  document.getElementsByClassName("no-duplicate-rights-sign-year")[0].innerText = data["written_year"] || "";
  document.getElementsByClassName("no-duplicate-rights-fullname")[0].innerText = data["confirm_name_no_duplicate"] || "";
  document.getElementsByClassName("no-duplicate-rights-age")[0].innerText = data["confirm_age_no_duplicate"] || "";
  document.getElementsByClassName("no-duplicate-rights-nationality")[0].innerText = data["confirm_nationality_no_duplicate"] || "";
  document.getElementsByClassName("no-duplicate-rights-disability-card-no")[0].innerText = data["confirm_disability_card_no_duplicate"] || "";
  document.getElementsByClassName("no-duplicate-rights-disability-type")[0].innerText = data["confirm_disability_type_no_duplicate"] || "";
  document.getElementsByClassName("no-duplicate-rights-phone")[0].innerText = data["confirm_phone_no_duplicate"] || "";
  document.getElementsByClassName("no-duplicate-rights-house-no")[0].innerText = data["confirm_house_no_no_duplicate"] || "";
  document.getElementsByClassName("no-duplicate-rights-caregiver-fullname")[0].innerText = data["confirm_caregiver_name_no_duplicate"] || "";
  document.getElementsByClassName("no-duplicate-rights-id-card-no")[0].innerText = data["confirm_id_card_no_duplicate"] || "";
  document.getElementsByClassName("no-duplicate-rights-house-nos")[0].innerText = data["confirm_caregiver_house_no_no_duplicate"] || "";
  document.getElementsByClassName("no-duplicate-rights-year-2023")[0].innerText = data["confirm_in_year_no_duplicate"] || "";
  document.getElementsByClassName("no-duplicate-rights-company-2023")[0].innerText = data["confirm_with_company_no_duplicate"] || "";
  document.getElementsByClassName("disabilities-page-3-fullname-2")[0].innerText = data["confirm_disability_no_duplicate"] || "";
  document.getElementsByClassName("witness-fullname-2")[0].innerText = data["confirm_witness_caregiver_no_duplicate"] || "";
  document.getElementsByClassName("coordinator-fullname-2")[0].innerText = data["confirm_coordinator_no_duplicate"] || "";
}

// ฟังก์ชันแปลงข้อมูลเป็น PDF ด้วย window.print()
function generatePrintPDF() {
  // ดึงข้อมูลจากฟอร์ม
  const formData = new FormData(document.getElementById("disability-form"));

  // แปลง FormData เป็น Object
  const data = {};
  for (let [key, value] of formData.entries()) {
    if (data[key]) {
      if (Array.isArray(data[key])) {
        data[key].push(value);
      } else {
        data[key] = [data[key], value];
      }
    } else {
      data[key] = value;
    }
  }
  
  console.log(data);

  // สร้างข้อมูลให้กับ PDF สำหรับพิมพ์
  createDataForPDF(data);

  // เรียกใช้ฟังก์ชันพิมพ์เอกสาร
  window.print();
}

// Event Submit Form
document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();

  // ตรวจสอบว่าเปิดใช้งานอินเทอร์เน็ตหรือไม่
  if (!navigator.onLine) {
    alert("กรุณาเปิดใช้งานอินเทอร์เน็ตก่อนแปลงเป็น PDF สำหรับพิมพ์");
    return;
  }

  // const ok = confirm(
  //   "ระบบจะเปิดหน้าต่างพิมพ์เอกสาร\n\n" +
  //     'เพื่อให้เอกสารแสดงผลถูกต้อง กรุณาปิดตัวเลือก "Headers and footers"\n' +
  //     "ในหน้าต่างพิมพ์ ก่อนกด Print หรือ Save as PDF"
  // );

  // if (!ok) {
  //   return;
  // }

  // สร้าง PDF สำหรับพิมพ์
  generatePrintPDF();
});
