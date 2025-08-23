import pool from "../config/db.js";

// Create Admin User (insert into lead_master)
export const createAdminUser = async (req, res) => {
  try {
    const {
      email,
      firstName,
      lastName,
      tlcCity,
      whatsapp,
      contact,
      organizationName,
      organizationType,
      yourDesignation,
      organizationAddress,
      pincode,
      city,
      states,
      country,
      startupCompany,
      govFunded,
      ifYesGovMention,
      fieldInnovation,
      specifyField,
      patentFiled,
      ifYesHowManyPatent,
      innovativeIdeas,
      ifYesHowManyIdeas,
      ideaGeneration,
      scheduleDiscussion,
      bookTimeSlot,
      responses
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !tlcCity || !contact) {
      return res.status(400).json({
        error: "First name, last name, TLC city, and contact are required",
      });
    }

    const query = `
      INSERT INTO lead_master (
        email,
        first_name,
        last_name,
        tlc_city,
        contact_whatsapp,
        contact,
        organization_name,
        organization_type,
        your_designation,
        organization_address,
        pincode,
        city,
        states,
        country,
        startup_company,
        gov_funded,
        if_yes_gov_mention,
        field_innovation,
        specify_field,
        patent_filed,
        if_yes_how_many_patent,
        innovative_ideas,
        if_yes_how_many_ideas,
        idea_generation,
        schedule_discussion,
        book_timeslot,
        responses
      )
      VALUES (
        $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,
        $11,$12,$13,$14,$15,$16,$17,$18,$19,$20,
        $21,$22,$23,$24,$25,$26,$27
      )
      RETURNING *;
    `;

    const values = [
      email || null,
      firstName,
      lastName,
      tlcCity,
      whatsapp || null,
      contact,
      organizationName || null,
      organizationType || null,
      yourDesignation || null,
      organizationAddress || null,
      pincode || null,
      city || null,
      states || null,
      country || null,
      startupCompany || null,
      govFunded || null,
      ifYesGovMention || null,
      fieldInnovation || null,
      specifyField || null,
      patentFiled || null,
      ifYesHowManyPatent || null,
      innovativeIdeas || null,
      ifYesHowManyIdeas || null,
      ideaGeneration || null,
      scheduleDiscussion || null,
      bookTimeSlot || null,
      responses || null,
    ];

    const result = await pool.query(query, values);

    return res
      .status(201)
      .json({ message: "Admin user created successfully", data: result.rows[0] });
  } catch (err) {
    console.error("Error inserting admin user:", err.message);
    res.status(500).json({ error: err.message });
  }
};
