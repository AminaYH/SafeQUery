package eniso.gte2.tp2aminayahia

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.activity.ComponentActivity


class CurrencyActivity : ComponentActivity() {
    private lateinit var textViewResult: TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_currency)
        val editTextAmount: EditText = findViewById(R.id.editTextNumber)
        val buttonConvertToEuro: Button = findViewById(R.id.button)
        val buttonConvertToDinar: Button = findViewById(R.id.button3)
        textViewResult = findViewById(R.id.textView2)

      /*  buttonConvertToEuro.setOnClickListener {
            val amountInDinar = editTextAmount.text.toString().toFloatOrNull()
            if (amountInDinar != null) {
                val amountInEuro = convertToEuro(amountInDinar)
                textViewResult.text = " $amountInEuro "
            } else {
                textViewResult.text = "Invalid input"
            }
        }
       buttonConvertToDinar.setOnClickListener {
            val amountInEuro = editTextAmount.text.toString().toFloatOrNull()
            if (amountInEuro != null) {
                val amountInDinar = convertToDinar(amountInEuro)
                textViewResult.text = " $amountInDinar "
            } else {
                textViewResult.text = "Invalid input"
            }
        }
*/

        buttonConvertToEuro.setOnClickListener {
            launchConversionActivity(editTextAmount.text.toString(), "Euro")
        }

        buttonConvertToDinar.setOnClickListener {
            launchConversionActivity(editTextAmount.text.toString(), "DT")
        }
        val textAmount = intent.getStringExtra("result")
        if (textAmount != null) {
            textViewResult.text = textAmount
        }
    }

    private fun launchConversionActivity(amount: String, currency: String) {
        val intent = Intent(this, ConversionActivity::class.java)
        intent.putExtra("amount", amount)
        intent.putExtra("currency", currency)
        startActivityForResult(intent, REQUEST_CODE_CONVERSION)

    }

    companion object {
        const val REQUEST_CODE_CONVERSION = 123 }
    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)

        if (requestCode == REQUEST_CODE_CONVERSION && resultCode == RESULT_OK) {
            val result = data?.getStringExtra("result")
            if (result != null) {
                // Update the TextView with the result
                textViewResult.text = result
            }
        }
    }


}

   /* private fun convertToEuro(amountInDinar: Float): Float {
        return (amountInDinar * 0.32).toFloat()
    }
    private fun convertToDinar(amountInDinar: Float): Float {
        return (amountInDinar * 3.2).toFloat()
    }*/


