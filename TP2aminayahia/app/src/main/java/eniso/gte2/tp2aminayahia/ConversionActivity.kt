package eniso.gte2.tp2aminayahia

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import androidx.activity.ComponentActivity

class ConversionActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_conversion)
        val textAmount: TextView = findViewById(R.id.textViewExample1)
        val amount = intent.getStringExtra("amount")
        val currency = intent.getStringExtra("currency")
        val buttonResult: Button = findViewById(R.id.EnvoyerResultat)
        val buttonTerminer: Button = findViewById(R.id.Terminer)
        if (currency == "DT") {
            val amountInDinar = amount?.toFloatOrNull()

            if (amountInDinar != null) {
                val amountInEuro = convertToEuro(amountInDinar)
                textAmount.text = "L'équivalent de $amount DT en Euro est : $amountInEuro Euro"
            } else {
                textAmount.text = "Veuillez entrer le montant en dinar valide"
            }
        } else if (currency == "Euro") {
            val amountInEuro = amount?.toFloatOrNull()

            if (amountInEuro != null) {
                val amountInDinar = convertToDinar(amountInEuro)
                textAmount.text = "L'équivalent de $amount Euro en DT est : $amountInDinar DT"

            } else {
                textAmount.text = "Veuillez entrer le montant en euro valide"
            }
        }

        buttonResult.setOnClickListener {
            val resultIntent = Intent(this, CurrencyActivity::class.java)
            resultIntent.putExtra("result", textAmount.text.toString())
            setResult(RESULT_OK, resultIntent)

            finish()
        }
       buttonTerminer.setOnClickListener {
           finish()

       }
    }


    private fun convertToEuro(amountInDinar: Float): Float {
        return (amountInDinar * 0.32).toFloat()
    }
    private fun convertToDinar(amountInDinar: Float): Float {
        return (amountInDinar * 3.2).toFloat() }

}